import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SideBarComp from './SideBarComp'
import NavbarComp from './NavbarComp'
import Image from 'next/image'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic';

const styles = {
  position: 'absolute',
  width: '100vw',
  '.appbar': {
    backdropFilter: 'blur(5px)',
    position: 'relative',
    // maxWidth: "1300px",
    padding: {
      lg: ' 0 50px',
      md: '0 50px',
      sm: '0 30px',
      xs: '0 25px',
    },
    paddingTop: '10px !important',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    '.logo': {
      cursor: 'pointer',
    },
  },
}

export default function AppbarComp() {


  

  const SideBarComp = dynamic(() => import('./SideBarComp'), { ssr: false });
  const NavbarComp = dynamic(() => import('./NavbarComp'), { ssr: false });


  const router = useRouter()
  const [top, setTop] = useState(true)
  // const [width, setWidth] = useState(() => window.innerWidth); // Initial width
  const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0)); // Initial width

  const goToHome = () => {
    router.push('/home')
  }

  const handleTop = () => {
    if (window.scrollY === 0) setTop(true)
    else setTop(false)
  }

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleTop)
  //   return () => {
  //     window.removeEventListener('scroll', handleTop)
  //   }
  // }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleTop);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleTop);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  

  


  const isMobile = width < 960;
  // let width = window.innerWidth;
  console.log(width);
  
  // console.log('isMobile:', isMobile);
  // console.log('width:', width);
  
  return (
    
    <Box
      sx={styles}
      className="center2"
    >
      <AppBar
        className="appbar"
        style={{
          mt: '30px',
          background: 'transparent',
          backdropFilter: `${top ? 'none' : 'blur(10px)'}`,
          // background: `${top ? 'none' : 'black'}`,
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          paddingBottom:"10px"
        }}
      >
        <Image
          onClick={goToHome}
          src="/images/impetusLogo.png"
          alt="logo"
          width="70"
          height="70"
          className="logo"
        />
        {/* ${width="20px"?<SideBarComp />:Menu} */}
        {/* <SideBarComp /> */}
        {/* <NavbarComp/> */}
        {isMobile ? <SideBarComp /> : <NavbarComp />}
      </AppBar>
    </Box>
  )
}
