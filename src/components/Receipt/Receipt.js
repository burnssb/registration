import { useEffect } from 'react';
import { EMAIL_CONTACT, DETAILS_URL, CONTACT_TRACING_URL, WAIVER_URL, PAYPAL_ME_URL } from 'config';
import { mailtoLink, websiteLink, scrollToTop } from 'utils';
import OrderSummary from 'components/OrderSummary';
import { StyledLink } from 'components/Layout/SharedStyles';
import { Divider, Typography } from '@mui/material';

export default function Receipt({ order }) {
  useEffect(() => { scrollToTop() },[]);
  return(
    <>
      <p>Thanks, {order.people[0].first}!</p>
      {order.paypalEmail === 'check' ? <CheckReceipt order={order}/> : <PaypalReceipt order={order }/>}
    </>
  );
}

function CheckReceipt({ order }) {
  return (
    <>
      <Typography color='error' component='p'>
        <strong>Your registration is not yet complete!</strong><br />
        Please send a check for ${order.total} to secure your spot.
      </Typography>
      <p>Make your check out to PCDC, write your name in the memo area, and mail to:</p>
      <pre>
        Portland ECD Ball<br />
        3648 SW Beaverton Hillsdale Hwy #10<br />
        Portland, OR 97221-3820
      </pre>
      <p>
        Alternatively, you can pay via PayPal.Me <StyledLink to={websiteLink(PAYPAL_ME_URL)} target="_blank">here</StyledLink>. This requires you to have a PayPal account, but you can sign up for one on the spot. You can then pay by credit card, debit card, or your bank account. Please specify the registration amount and "Add a Note" to include your name.
      </p>

      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

function PaypalReceipt({ order }) {
  return (
    <>
      <p>
        Your payment to PCDC for ${order.total} has been successfully processed.<br />
        Thank you for registering for the 2023 ECD Ball.<br />
        Your name will be on a list at the door. (You will not receive a physical ticket.)
      </p>

      <OrderSummary order={order} currentPage='confirmation' />

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography component='h6' variant="h6" gutterBottom={true}>Important info</Typography>

      <p>If you have not already done so, you can expedite the entry process by doing these ahead of time:</p>

      <p>
        &#8674; Fill out the <StyledLink to={websiteLink(CONTACT_TRACING_URL)} target="_blank" rel="noreferrer">PCDC Contact Tracing form</StyledLink> online.<br />
        &#8674; Print and bring with you a signed copy of the <StyledLink to={websiteLink(WAIVER_URL)} target="_blank" rel="noreferrer">PCDC event waiver</StyledLink>.
      </p>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography component='h6' variant="h6" gutterBottom={true}>Event details</Typography>

      <p>
        Event info here<br />
      </p>
      <p><strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <StyledLink to="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</StyledLink>.</p>
      <p>
        See <StyledLink to={websiteLink(DETAILS_URL)} target="_blank" rel="noreferrer">{DETAILS_URL}</StyledLink> for further details.<br />
        Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink> if you have any questions.
      </p>
    </>
  );
}

export function AdditionalPersonReceipt({ order }) {
  return (
    <>
      <p>
        You have been registered for the 2023 ECD Ball.<br />
        Your name will be on a list at the door. (You will not receive a physical ticket.)
      </p>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography component='h6' variant="h6" gutterBottom={true}>Important info</Typography>

      <p>If you have not already done so, you can expedite the entry process by doing these ahead of time:</p>

      <p>
        &#8674; Fill out the <StyledLink to={websiteLink(CONTACT_TRACING_URL)} target="_blank" rel="noreferrer">PCDC Contact Tracing form</StyledLink> online.<br />
        &#8674; Print and bring with you a signed copy of the <StyledLink to={websiteLink(WAIVER_URL)} target="_blank" rel="noreferrer">PCDC event waiver</StyledLink>.
      </p>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography component='h6' variant="h6" gutterBottom={true}>Event details</Typography>

      <p>
        Event info here<br />
      </p>
      <p><strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <StyledLink to="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</StyledLink>.</p>
      <p>
        See <StyledLink to={websiteLink(DETAILS_URL)} target="_blank" rel="noreferrer">{DETAILS_URL}</StyledLink> for further details.<br />
        Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink> if you have any questions.
      </p>
    </>
  )
}
