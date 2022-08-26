import * as React from 'react'
import type { NextPage } from 'next'

import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import ColorModeContext from '../context/ColorModeContext'

import styles from '../styles/Landing.module.scss'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CustomButton from '../components/layouts/UI/customButton/customButton'

const Landing: NextPage = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  const [isNavigate, setNavigation] = React.useState('')

  const handleNavigationClick = () => {
    setNavigation(() => (window.location.href = '#'))
  }
  const handleSocialLinks = (type: string) => {
    switch (type) {
      case 'twitter':
        window.open('https://twitter.com/BLBprotocol/', '_blank')
        break
      case 'github':
        window.open(' https://github.com/Blueberryfi', '_blank')
        break
      case 'discord':
        window.open('https://discord.gg/VJAPVjy5uk', '_blank')
        break
      case 'medium':
        window.open('https://medium.com/@blueberryprotocol', '_blank')
        break
    }
  }

  return (
    <Box className={styles.container} sx={{ backgroundColor: 'primary.main' }}>
      <Box
        sx={{
          color: '#fff',
          position: 'absolute',
          right: '20px',
          top: '20px',
        }}
      >
        <CustomButton
          handleButtonClick={handleNavigationClick}
          title="Start Earning Now"
        />
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          <Image
            src={
              theme.palette.mode === 'light'
                ? '/landing/crescent.svg'
                : '/landing/sun.svg'
            }
            alt=""
            width={34}
            height={34}
          />
        </IconButton>
      </Box>

      <Box
        className={styles.banner}
        sx={{
          backgroundImage:
            theme.palette.mode === 'light'
              ? "url('/landing/banner-bg-light.svg')"
              : "url('/landing/banner-bg-dark.svg')",
        }}
      >
        <Box className={styles.content}>
          <Box>
            <Image
              src="/landing/banner-img.svg"
              alt=""
              width={774}
              height={350}
            />
          </Box>
          <Box>
            <Image
              src={
                theme.palette.mode === 'light'
                  ? '/logo-purple-text-only.svg'
                  : '/logo-white-text-only.svg'
              }
              alt=""
              width={312}
              height={60}
              className={styles.logoText}
            />
          </Box>
          <Typography
            className={styles.desc}
            sx={{ color: 'primary.contrastText' }}
          >
            Automated, boosted yield strategies for Uniswap v3.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '70px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            borderTop:
              theme.palette.mode === 'light'
                ? '1px solid #CCD9DC'
                : '1px solid rgba(204, 217, 220, 0.2)',
            width: '400px',
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          marginTop: '100px',
          textAlign: 'center',
          fontFamily: 'Heebo',
          color: 'primary.contrastText',
          lineHeight: '35px',
          fontSize: '24px',
          fontWeight: '500',
        }}
      >
        Combining the best features of DeFi for the ultimate LP experience
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          marginTop: '60px',
          color: 'primary.contrastText',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image src="/landing/juicy.svg" alt="" width={42} height={76} />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Juicy Yield
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
                maxWidth: '230px',
              }}
            >
              Multiply your ROI with up to 3x leverage
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image src="/landing/capital.svg" alt="" width={77} height={76} />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Capital Efficiency
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
                maxWidth: '340px',
              }}
            >
              Enabling under collateralization through careful risk management
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image src="/landing/collateral.svg" alt="" width={70} height={70} />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Collateral Flexibility
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
                maxWidth: '340px',
              }}
            >
              Keep 100% of your directional token position while generating
              yield as an LP
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: '100px',
          textAlign: 'center',
          fontFamily: 'Heebo',
          color: 'primary.contrastText',
          lineHeight: '35px',
          fontSize: '24px',
          fontWeight: '500',
        }}
      >
        A comfy combination of tools to support your position
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          marginTop: '60px',
          color: 'primary.contrastText',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image
            src="/landing/concentrated.svg"
            alt=""
            width={70}
            height={66}
          />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Concentrated Liquidity
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
              }}
            >
              Supports v3 pools for optimal yield
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image src="/landing/angel.svg" alt="" width={57} height={64} />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Angel Vault Support
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
                maxWidth: '340px',
              }}
            >
              v3 Liquidity Pools designed to provide price support, protecting
              your positions
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          sx={{
            textAlign: 'center',
            padding: '0px 50px',
          }}
        >
          <Image src="/landing/automation.svg" alt="" width={64} height={64} />
          <Typography
            sx={{
              marginTop: '31px',
              fontFamily: 'Heebo',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '26px',
            }}
          >
            Automation
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'Heebo',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '26px',
                maxWidth: '340px',
              }}
            >
              Interest payments and yield harvesting happen like magic, earn
              comfortably while you sleep
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            borderTop: '1px solid #CCD9DC',
            width: '400px',
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          marginTop: '100px',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'primary.contrastText',
            fontFamily: 'Heebo',
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '47px',
          }}
        >
          Join Our Community
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 5, md: 5, lg: 5 }}
          sx={{
            marginTop: '1px !important',
            paddingBottom: '100px',
          }}
        >
          <Grid item sx={{ cursor: 'pointer' }}>
            <Image
              onClick={() => handleSocialLinks('twitter')}
              src="/social/twitter.svg"
              alt=""
              width={66}
              height={52}
            />
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }}>
            <Image
              onClick={() => handleSocialLinks('discord')}
              src="/social/discord.svg"
              alt=""
              width={66}
              height={52}
            />
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }}>
            <Image
              onClick={() => handleSocialLinks('github')}
              src={
                theme.palette.mode === 'light'
                  ? '/social/github-light.svg'
                  : '/social/github-dark.svg'
              }
              alt=""
              width={60}
              height={60}
            />
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }}>
            <Image
              onClick={() => handleSocialLinks('medium')}
              src={
                theme.palette.mode === 'light'
                  ? '/social/Medium_dark.svg'
                  : '/social/Medium_light.svg'
              }
              alt=""
              width={60}
              height={60}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Landing