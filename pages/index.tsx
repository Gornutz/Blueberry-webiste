import * as React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Box from '@mui/material/Box'
import Image from 'next/image'

import styles from '../styles/Landing.module.scss'

const Landing: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const status = window.localStorage.getItem("verifyStatus")
    if(status) {
      router.push("/home")
    }
  }, []);

  return (
    <Box className={styles.container} sx={{ backgroundColor: 'primary.main' }}>
      <Box>
        <Box>
          <Link href={"/verification"}>
            <a>
              <Image
                src="/logo.svg"
                alt=""
                width={774}
                height={350}
              />
            </a>
          </Link>
        </Box>

        <Box className={styles.boxEnter}>
          <Link href={"/home"}>
            <a className={styles.btnEnter}>ENTER</a>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
