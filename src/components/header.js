import Head from 'next/head'
import Image from 'next/image'
import useHelpCenter from '../../hooks/useHelpCenter'
import SubMenu from '../components/subMenu.js'

const header = () => {
  const {handleSubMenu, isSubMenu, handleColor} = useHelpCenter()

  return (
    <>
    <Head>
      <title>Page 1 - Help Center 22/08/23</title>
    </Head>
        <div className='flex top-0 left-0 justify-center'>
            <Image
                src='/images/header.png'
                width={1500}
                height={700}
                alt='Imagen Fondo'    
            />
        </div>
        {/* Logo y helpcenter */}
        <div className='flex -mt-[680px] mx-[275px] bg-[#D6E7FF] h-[60px] rounded-full w-[1350px] relative'>
             <div className="flex items-center px-4 mx-4">
                <Image
                    src='/images/logo.png'
                    width={150}
                    height={150}
                    alt='Logo'
                />
            </div>
            <p className='flex items-center justify-end px-4 font-poppins text-[#07074D] font-semibold -mx-6'>Help center</p>
        </div>
        <h3 className='font-bold font-poppins text-[#07074D] text-4xl flex justify-center items-center text-center mt-[155px]'>Hi, how can we help you?</h3>
        {/* Provider-Buyer*/}
        <div className='flex justify-center mt-10 rounded'>
          <div className='bg-white rounded-full flex justify-center w-[500px] h-[80px] mx-[700px] relative -mt-[200px]'>
            <div className='flex items-center justify-center space-x-4'>
              <p className='bg-blue-600 rounded-full h-[60px] w-[235px] font-bold font-poppins text-white text-xl flex items-center text-center justify-center cursor-pointer'>Provider Support</p>
              <p className=
              {`bg-whiterounded-full h-[60px] w-[235px] font-bold font-poppins text-[#737373] text-xl flex items-center text-center justify-center cursor-pointer`}
                onClick={handleColor}
              >Buyer Support</p>
            </div>
          </div>
        </div>
        
        {/*Barra busqueda */}
        <div className=" inset-0 flex items-center justify-center -mt-[24px] relative">
          <div className="bg-white p-2.5 rounded-2xl shadow-md w-[520px] relative">
             <input
              type="text"
              placeholder="Type your question"
              className="w-full outline-none pr-16"
            />
               <div className="absolute -right-[7px] top-1/2 transform -translate-y-1/2 bg-blue-700 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8 text-white"
                    onClick={handleSubMenu}>
                  <path 
                    fillRule="evenodd" 
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" 
                    clipRule="evenodd" 
                 />
                  </svg>
                </div>
            </div>
        </div>
        {isSubMenu && <SubMenu/>}
        
        {/* Select */}
        <div className="relative">
          <select className="border rounded-full p-2 font-semibold text-indigo-900 cursor-pointer mx-[1470px] -mt-[302px] flex border-none relative bg-white w-[130px] h-[34px] font-poppins">
            <option className='text-[#07074D] font-poppins'>Account</option>
            <option className='text-[#07074D] font-poppins'>Sign Up</option>
            <option className='text-[#07074D] font-poppins'>Sign In</option>
          </select>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center mx-[295px] bg-[#D6E7FF] rounded-full border-2 border-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7" style={{color:'#1D4ED8'}}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
        </div>
        {/* Sign In */}
        <div className="bg-[#F3F5F8CC] bg-opacity-80 p-4 rounded-3xl absolute top-[500px] left-0 right-0 flex justify-between items-center mx-[270px] w-[1360px]">
          <div className="flex items-center space-x-2">
            <p className="font-black text-[#07074D] text-center ms-20 font-poppins text-xl">Want to receive support tailored for you?</p>
            <p className="text-[#07074D] font-poppins text-xl">Sign in to your Agriglobal Market account</p>
          </div>
          <button 
          className="font-semibold text-[#07074D] bg-[#33CC00] rounded-full p-2.5 font-poppins"
          >Sign in to your account</button>
        </div>
    </>
  )
}

export default header

