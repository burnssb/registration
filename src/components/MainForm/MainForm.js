import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { scrollToTop, sanitizeObject, clearCachedLastCompletedOrder, clearCachedOrder } from 'utils';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import FormContents from "./FormContents";
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PRONOUNS_REGEX, PHONE_REGEX, SINGLE_PAGE } from "config";

export default function MainForm({ order, setOrder }) {
  const navigate = useNavigate();
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);
  const [currentPage, setCurrentPage] = useState(1);

  clearCachedOrder();
  clearCachedLastCompletedOrder();

  useEffect(() => { 
    scrollToTop(); 
  },[])

  function personValidationSchema(index) {
    return Yup.object({
      fullName: Yup.string()
        .matches(NAME_REGEX, 'Invalid characters :(')
        .required('Please enter your name.'), // name is required
      pronouns: Yup.string()
        .matches(PRONOUNS_REGEX, 'Invalid characters :('), // pronouns are optional
      email: index < ADMISSION_QUANTITY_RANGE[1] ? // email is required
        Yup.string().email('Please enter a valid email.').required('Please enter your email.')
        : Yup.string().email('Please enter a valid email.'),
      phone: index < ADMISSION_QUANTITY_RANGE[0] ? // phone required only for first person
        Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.').required('Please enter your phone number.')
      : Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.')
    });
  }

  const page1ValidationSchema=Yup.object({
    people: Yup.array().of(
      Yup.lazy((value) => {
        return value.index < admissionQuantity ? personValidationSchema(value.index) : Yup.mixed().notRequired();
      })
    ),
    emailConfirmation: Yup.string()
      .oneOf([Yup.ref('people[0].email'), null], 'Email addresses do not match.')
      .required('Please confirm your email.'),
    admissionQuantity: Yup.number()
    .min(ADMISSION_QUANTITY_RANGE[0])
    .max(ADMISSION_QUANTITY_RANGE[1])
    .required()
  });

  const page2ValidationSchema=Yup.object({
    admissionCost: Yup.number()
      .min(ADMISSION_COST_RANGE[0])
      .max(ADMISSION_COST_RANGE[1])
      .required(),
    donation: Yup.number()
      .min(DONATION_RANGE[0])
      .max(DONATION_RANGE[1])
  });

  const fullValidationSchema = Yup.object({
    ...page1ValidationSchema.fields,
    ...page2ValidationSchema.fields,
  });

  return (
    <>
      <Header />
      <Formik
        initialValues={order}
        validationSchema={SINGLE_PAGE || currentPage === 2 ? fullValidationSchema : page1ValidationSchema}
        onSubmit={(values, actions) => {
          if (SINGLE_PAGE || currentPage === 2) {
            const submittedOrder = Object.assign({}, values);
            const trimmedOrder = removeExtraPeople(submittedOrder);
            const sanitizedOrder = sanitizeObject(trimmedOrder);
            console.log(sanitizedOrder);
            setOrder(sanitizedOrder);
            navigate('/checkout', { state: { fromForm: true } });
          } else {
            console.log('foo');
            actions.setTouched({});
            setCurrentPage(2);
            return;
          }
        }}
      >
        <FormContents
          admissionQuantity={admissionQuantity} setAdmissionQuantity={setAdmissionQuantity}
          currentPage={currentPage} setCurrentPage={setCurrentPage}
        />
      </Formik>
    </>
  );
}

const removeExtraPeople = (order) => {
  return Object.fromEntries(
    Object.entries(order).map(([key, value]) => {
      if (key === 'people') {
        return [key, value.map(
          person => person.index < order.admissionQuantity ? person : { ...person, fullName: '', pronouns: '', email: '', phone: '' }
        )];
      }
      return [key, value];
    })
  );
}
