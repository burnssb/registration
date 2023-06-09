import { Input } from '../Input';
import { FIELD_CONFIG } from 'config';
import { Grid } from '@mui/material';

export default function ContactInfoInputs({ fields, index }) {
  return (
    <Grid container spacing={2}>
      {fields.sort((a, b) => FIELD_CONFIG[a].order - FIELD_CONFIG[b].order)
      .map((field, i) => (
        <Grid item xs={12} sm={field === 'email' && fields.includes('emailConfirmation') ? 6 : FIELD_CONFIG[field].width} key={`${index}-${field}`}>
          <Input
            label={FIELD_CONFIG[field].label}
            name={FIELD_CONFIG[field].name || `people[${index}].${field}`}
            type={FIELD_CONFIG[field].type || 'text'}
            pattern={FIELD_CONFIG[field].pattern}
            placeholder={FIELD_CONFIG[field].placeholder}
            autoComplete={FIELD_CONFIG[field].autoComplete}
            fullWidth
            mask='_'
            variant='standard'
            hidden={FIELD_CONFIG[field].hidden}
          />
        </Grid>
      ))}
    </Grid>
  );
}
