import Mainlayout from "../components/mainlayout";
import '../styles/tailwind.css'
import App from 'next/app'
import Genrelayout from "../components/genrelayout";
import React from 'react';
import 'balloon-css';

class MyApp extends App {

    render() {
      const { Component, pageProps, router } = this.props

      const getLayout =
          Component.getLayout || (page => <Mainlayout children={page} />)

      return getLayout(<Component {...pageProps} />)
    }
 // return <Component {...pageProps} />
}

export default  MyApp