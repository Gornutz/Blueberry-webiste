import * as React from 'react';

import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {

  return (
    <Box sx={{
      backgroundColor: '#010D19',
      textAlign: 'center',
      padding: '46px 0px'
    }}>
      <Image src="/logo-white-text.svg" alt="Logo" width={220} height={56} />
      <Typography sx={{
        color: '#fff',
        marginTop: '22px',
        fontFamily: 'Heebo'
      }}>
        Copyright © 2022 Blueberry
      </Typography>
    </Box>
  );
};

export default Footer;