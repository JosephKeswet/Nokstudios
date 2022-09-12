import '../styles/Polygon.css'
import '../styles/globals.css'
import '../styles/UnderlineAnim.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return <AnimatePresence mode='wait' >
    <Component {...pageProps} />
    </AnimatePresence>
}

export default MyApp
