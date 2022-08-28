import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FiChevronDown } from 'react-icons/fi';

const Accardion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<FiChevronDown />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography width="95%">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <span>Test #1</span><span>23/04/2022</span><span>166/189</span></div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accardion;