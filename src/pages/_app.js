import '@/styles/globals.css'
import Head from 'next/head'
import {HelpCenterProvider} from '../../context/HelpCenterProvider'

export default function App({ Component, pageProps }) {
  return (
    <>
    <HelpCenterProvider>
      <Head>
      
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      </Head>
      <Component {...pageProps} />
    </HelpCenterProvider>
    </>
  )
}
