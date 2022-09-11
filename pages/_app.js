import '../styles/Polygon.css'
import '../styles/globals.css'
import '../styles/select.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return <AnimatePresence exitBeforeEnter >
    <Component {...pageProps} />
    </AnimatePresence>
}

export default MyApp
