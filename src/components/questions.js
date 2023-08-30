import Image from 'next/image';
import useHelpCenter from '../../hooks/useHelpCenter';
import Question from '../components/question.js'

const questions = () => {
    const {isLastContentVisible,handleClick, handleLastIconClick, handleQuestionClick, isQuestionVisible} = useHelpCenter()
    
  return (
        <>
        {isQuestionVisible ? (
        <Question />
        ) : (
          <>
    {/* Seccion navbar*/}
    <section className='flex items-center bg-[#D6E7FF] w-[1320px] h-[65px] p-2 rounded-t-3xl relative mx-[293px] -mt-[409px] border-b border-[#D8D8D8] font-poppins' /> 
      <div
        className='flex justify-center items-center bg-white rounded-full w-10 h-10 mx-[300px] -mt-[50px] relative cursor-pointer font-poppins'
        onClick={handleClick}
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
      <div className='flex items-center mx-[350px] -mt-[34px] space-x-2 relative font-poppins'>
        <p className='font-semibold text-lg leading-relaxed underline text-[#06F] font-poppins'>Provider</p>
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
        <p className='font-poppins font-semibold text-lg leading-relaxed underline text-[#06F]'>Selling</p>
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
              <p className='font-poppins font-semibold text-lg leading-relaxed underline text-[#06F] '>Sales process</p>
          </>
        )}
      </div>
      <section className='flex items-center mx-[250px] -mt-[19px] w-[1400px]'>
      
       {/*Menu*/}
      <div className='flex bg-white ms-11 shadow-xl rounded-3xl'>
        <div className='w-[310px] h-[1120px] border-r border-[#D8D8D8]'>
          <div className='flex flex-col mt-10 space-y-[10px] text-center'>
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
              <div className='text-[#737373] text-lg font-poppins'>
                <p>Letter of Credit</p>
                <p className='text-[#737373] ml-2 text-lg font-poppins'>payment</p>
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
              <div className='text-[#737373] text-lg font-poppins'>
                <p>Cash Against</p>
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
                      <p className='text-[#737373] text-xl font-poppins'>Prepaid payment</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"style={{color:'#737373'}}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
          </div>
        </div>
      </div>

          {/* Seccion Questions*/}
        <div className='w-[1010px] h-[526px] -ms-[2px]'>
          <section className='flex items-center w-[1008px] mx-[2px] mt-[33.5px] h-[66px] bg-[#D8D8D8] absolute justify-between border-b border-[#D8D8D8] pb-2'>
            <p className='font-xs mx-10 text-xl font-poppins'>Sales Process</p>
              <div 
              className='mx-[40px] cursor-pointer'
              onClick={handleLastIconClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            <section className='flex items-center w-[1008px] -mx-[0.5px] mt-[2050px] h-[66px] bg-[#F1F1F1] absolute justify-between border-b border-t border-[#D8D8D8] pb-2 rouded-xl'>
                    <p className='font-xs mx-10 text-xl font-poppins'>Sale Safely</p>
                    <div className='mx-[40px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
            </section>
          </section>
          
        <section className='flex flex-col justify-center relative space-y-3 space-x-9 mt-[109px]'>
            <p className='text-lg font-xs text-[#0066FF] mx-[35.5px] font-poppins'>• Why sell my products on the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• What products can I sell within the AgriGlobal Market Platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How to sell my products on the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Why do I have to create the Facilities and Freights before loading any products to the AGM platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How to create the Facilities before loading any products to the AGM platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How to create the Freights before loading any products to the AGM platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How cain I upload products to the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Why do my products need to be approved in order to sell them on the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How can I kwnow if my product was approved to be sold on the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How long does it take for my product to be approved?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• What can I do if my product was rejected?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How can I update or remove my product?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• If I edit my product, will it go through the approval process again?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Where can I see and manage the products that I am selling within the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How can I create offers to sell my products within the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• I already publised an offer; how can I see or edit it?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• How many offers can I have active?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Can I offer the same product 2 times or more?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• What are my responsibilities as a provider, when I publish a product or an offer?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• What is my store within the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Why have a store within the AgriGlobal Market platform?</p>
            <p 
            className='text-lg font-xs text-[#0066FF] cursor-pointer font-poppins'
            onClick={handleQuestionClick}
            >• What configurations do I have to make in order for my store to be ready within the AgriGlobal Market platform?</p>
            <p className='text-lg font-xs text-[#0066FF] font-poppins'>• Who are the buyers you find on the AgriGlobal Market platform?</p>
        </section>
        </div>
      </div>
    </section>
    {isQuestionVisible && <Question />}
    </>
    )}
    </>
  )
}

export default questions
