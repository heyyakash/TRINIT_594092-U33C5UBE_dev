import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import RightSIde from '../components/RightSIde'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <div className=' flex flex-col relative  min-h-[100vh] '>
      <Navbar />
      <main className='w-[1200px] z-0  relative mx-auto mt-[90px] flex '>

        <LeftSide />
        <div className="w-[560px] ml-[320px] ">
          <Component {...pageProps} />
        </div>
        <RightSIde />


      </main>
    </div>
  )
}

export default MyApp
