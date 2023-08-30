import Image from 'next/image';
import useHelpCenter from '../../hooks/useHelpCenter';
import Question from '../components/question.js'

const question = () => {
    const {isLastContentVisible, handleQuestionClick} = useHelpCenter()
  return (
    <>
    
    {/* Seccion navbar*/}
    <section className='flex items-center bg-[#D6E7FF] w-[1320px] h-[65px] p-2 rounded-t-3xl relative mx-[293px] -mt-[409px] border-b border-[#D8D8D8]' /> 
      <div
        className='flex justify-center items-center bg-white rounded-full w-10 h-10 mx-[300px] -mt-[50px] relative cursor-pointer'
        onClick={handleQuestionClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.2}
          stroke="currentColor"
          className="w-20 h-20 flex-shrink-0"
          style={{
            width: '60px',
            height: '60px',
            padding: '12px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            color: '#07074D',
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className='flex items-center mx-[350px] -mt-[34px] space-x-2 relative'>
        <p className='font-sans font-bold text-lg leading-relaxed underline text-[#06F]'>Provider</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4.3}
          stroke="currentColor"
          className="w-3 h-3"
          style={{ color: '#07074D' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <p className='font-sans font-bold text-lg leading-relaxed underline text-[#06F]'>Selling</p>
        {isLastContentVisible && (
          <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4.3}
                stroke="currentColor"
                className="w-3 h-3"
                style={{ color: '#07074D' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <p className='font-sans font-bold text-lg leading-relaxed underline text-[#06F]'>Sales process</p>
          </>
        )}
      </div>
      {/*Menu*/}
      <section className='flex items-center mx-[250px] -mt-[19px] w-[1400px]'>
      <div className='flex bg-white ms-11 shadow-xl rounded-lg'>
        <div className='w-[310px] h-[526px] border-r border-[#D8D8D8]'>
          <div className='flex flex-col mt-10 space-y-[10px]'>
            <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
                <Image
                  src='/images/1.jpg'
                  width={50}
                  height={50}
                />
                <p className='text-[#737373] text-lg font-poppins'>General Inquiries</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{color:'#737373'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
          <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
                  <Image
                    src='/images/2.jpg'
                    width={50}
                    height={50}
                  />
                  <p className='text-[#737373] text-lg font-poppins'>Buyer Account</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{color:'#737373'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
            </div>
            <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4 bg-[#D8D8D8] '>
                  <Image
                    src='/images/3.png'
                    width={50}
                    height={50}
                    
                  />
                  <p className='text-[#737373] text-lg font-poppins'>Selling</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"style={{color:'#737373'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
            </div>
          <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
                    <Image
                      src='/images/4.jpg'
                      width={50}
                      height={50}
                    />
                    <p className='text-[#737373] text-lg font-poppins'>AGM payment</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{color:'#737373'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
              <Image
                src='/images/5.jpg'
                width={50}
                height={50}
              />
              <div className='text-[#737373] text-xl text-center font-poppins'>
                <p className='text-lg font-poppins'>Letter of Credit</p>
                <p className='text-[#737373] ml-2 text-lg'>payment</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{color:'#737373'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
            </div>
           <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
              <Image
                src='/images/6.jpg'
                width={50}
                height={50}
              />
              <div className='text-[#737373] text-lg font-poppins text-center'>
                <p className='text-lg font-poppins'>Cash Against</p>
                <p className='text-[#737373] ml-2 text-lg font-poppins'>Document payment</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" style={{color:'#737373'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
            </div>

          <div className='flex items-center justify-between space-x-1 border-b border-[#D8D8D8] pb-2 pl-4 pr-4'>
                    <Image
                        src='/images/7.jpg'
                        width={50}
                        height={50}
                      />
                      <p className='text-[#737373] text-lg font-poppins'>Prepaid payment</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"style={{color:'#737373'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
          </div>
        </div>
      </div>

          {/* Seccion Pregunta*/}
        <div className='w-[1010px] h-[526px] -ms-[2px] relative font-poppins'>
          <section className='flex flex-col space-y-7 mt-[50px] space-x-4 mx-1'>
            <h2 className='font-black text-2xl text-[#07074D] text-center'>What configurations do I have to make in order for my store to be ready within the AgriGlobal Market platform?</h2>
            <p className='font-lg text-[#07074dee]'>You need to do the following to make your store available to customers:</p>
            <p className='font-lg text-[#07074dee]'>• Banner and store logo: Your store logo should be the same as your company logo, which must be uploaded in JPG, JPEG, PNG format.</p>
            <p className='font-lg text-[#07074dee]'>• The Banner is a graphic piece of size 1476x300 and format JPG, JPEG, PNG, which reflects the image of your company.</p>
            <p className='font-lg text-[#07074dee]'>• Store Policies: Please fill your policies for: shipping, returns, exchanges, payments, personalized items or any other guidelines that are inportant for buyers to know before making a purchase or dealing with your company.</p>
            <p className='font-lg text-[#07074dee]'>• Shipping profiles: Please specify the countries to which you can ship your products to, according to the regulatory documents you already have acces to, health agreement and export</p>
          </section>
        </div>
      </div>
      </section>
    </>
  )
}

export default question
