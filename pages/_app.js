import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { Router } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import AppbarComp from "../components/AppbarComp";
import LoadingComp from "../components/LoadingComp";
import { LoadingStateProvider } from "../components/LoadingContext";
import "../styles/globals.css";
import darkTheme from "../styles/theme/darkTheme";
import createEmotionCache from "../utility/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();
const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    window.addEventListener("loadstart", startLoading);
    window.addEventListener("load", stopLoading);
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      window.removeEventListener("loadstart", startLoading);
      window.removeEventListener("load", stopLoading);
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>IMPETUS 7.0</title>
        </Head>
        <CssBaseline />
        <LoadingStateProvider>
          {loading && <LoadingComp />}
          {!loading && <AppbarComp />}
          {!loading && <Component {...pageProps} />}
        </LoadingStateProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
