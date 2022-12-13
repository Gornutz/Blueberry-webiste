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
      <Typography sx={{
        collor: '#fff',
        marginTop: '22px',
        fontFamily: 'Heebo'
      }}>
        <a target="_blank" href="https://drive.google.com/file/d/1L0E4Skzcal2l0FkvMDUub6KgEU0Daj6h/view">Policies</a>;
        <a target="_blank" href="https://drive.google.com/file/d/1pzaIPK1tGS8rIv99Knr67C4yb-2wLmnJ/view?usp=share_link">Terms of Service</a>;
      </Typography>
    </Box>
  );
};

export default Footer;