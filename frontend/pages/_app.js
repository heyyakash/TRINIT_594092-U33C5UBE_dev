import LeftSide from '../components/LeftSide'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import RightSIde from '../components/RightSIde'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const layout = Component.getLayout
  if(layout) return <Component {...pageProps} />

  return (
    <>
    <Main>
      <Component {...pageProps} />
    </Main>
    </>
  )
}

export default MyApp
