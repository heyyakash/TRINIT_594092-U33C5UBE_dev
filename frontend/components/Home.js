import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LeftSide from '../components/LeftSide'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import RightSIde from '../components/RightSIde'
import Search from '../components/Search'


const Home = () => {

    const [data, setData] = useState(null)
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/post`)
        const result = await res.json()
        if (!result.error) {
            setData(result)
        }
    }
    return (
        data &&
        <div className='flex pb-10 flex-col w-full gap-3'>
            {data ? data.map((d) => {
                return <Post name={d.name} text={d.content} key = {d._id} upi={d.upi} image={d.image} />
            }) : (<></>)}
            <Post name="Chirag Nayak" text="We would like to extend a warm invitation to you to join us at an upcoming event hosted by our NGO. The event is aimed at bringing together like-minded individuals and organizations who share our passion for erradicating world hunger." image="https://nationaltoday.com/wp-content/uploads/2022/05/World-Hunger-Day-640x514.jpg" profile={"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"} upi="akashsharma2002@okcici" />
            <Post name="Save Wildlife" text="I am reaching out to you today to talk about a cause that is close to my heart and should be close to yours too - saving wildlife. As you know, our planet is Home to a diverse and magnificent array of species, each of which plays a crucial role in maintaining the balance of our ecosystems. Unfortunately, many of these species are facing the threat of extinction due to a variety of factors, including habitat loss, poaching, and overhunting." image={"https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"} upi="akashsharma2002@okicici" profile={"https://plus.unsplash.com/premium_photo-1667979823617-8e0c6b3bb123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
        </div>
        // <div className=' flex flex-col relative  min-h-[100vh] '>
        //     <Navbar />
        //     <main className='w-[1200px] z-0  relative mx-auto mt-[90px] flex '>

        //         <LeftSide />
        //         <div className="flex flex-col  w-[560px] ml-[320px]  gap-3">
        //             <Post />
        //             {/* <Post /> */}
        //         </div>
        //        <RightSIde />


        //     </main>
        // </div>
    )
}

export default Home