import Header from "@/components/header.js"
import Footer from "@/components/footer"
import Menu from "@/components/menu.js"
import Image from "next/image"

export default function Home() {
  return (
    <>
    
   <Header/>
    <Menu/>
    <div className="flex justify-center flex-grow relative">
    <Image 
      src='/images/contactus.png'
      width={1312}
      height={280}
      alt="Banner"
    />
    </div>
   <Footer/>
   </>
  )
}
