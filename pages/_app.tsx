import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

import { ThemeContext } from '../types';


export const themeContext = createContext<ThemeContext | null>(null);


function MyApp({ Component, pageProps }: AppProps) {

  const [dark, setDark] = useState(true)

  const handleDark = () => {
    setDark(!dark);
  }

  return (

      <themeContext.Provider value={ {dark, handleDark } }>
          <Component {...pageProps} />
      </themeContext.Provider>
  ) 
  
}

export default MyApp
