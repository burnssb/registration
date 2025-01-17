import { useEffect } from 'react';
import { scrollToTop } from 'utils.js';
import { Input, CheckboxInput } from '../Input';
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { Box } from '@mui/material';
import { VOLUNTEER_OPTIONS } from 'config';

export default function MiscInfo() {
  useEffect(() => { scrollToTop(); },[])
  return (
    <StyledPaper className='MiscInfo'>
      
      <Box sx={{ mb: 6 }}>
        <Title>Volunteering</Title>
          <CheckboxInput
            label='I would like to volunteer to help! I am available for:'
            name='volunteer'
            options={VOLUNTEER_OPTIONS}
          />
        </Box>

        <Box sx={{ mb: 6 }}>
          <Title>Contact information sharing</Title>
          <CheckboxInput
            name='share'
            options={[
              { label: 'YES! Please share my information with other organizers/events.', value: 'yes' },
            ]}
          />
        </Box>

        <Title>Final comments</Title>
        <Input
          type='textarea'
          name='comments'
          label="Please elaborate on any of the above questions or add any additional comments about your registration. Let us know if we missed anything, or there is something else we should know."
        />

    </StyledPaper>
  );
}
