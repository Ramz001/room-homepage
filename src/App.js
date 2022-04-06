import {useState,useEffect} from 'react'
import logo from './images/logo.svg';
import './index.css';
import arrow from './images/icon-arrow.svg';
import angleLeft from './images/icon-angle-left.svg';
import angleRight from './images/icon-angle-right.svg';
import imgAboutDark from './images/image-about-dark.jpg';
import hamburger from './images/icon-hamburger.svg';
import imgAboutLight from './images/image-about-light.jpg';
import cross from './images/icon-close.svg'

function App() {
  const [slide, setSlide] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isDekstopWidth,setIsDesktopWidth] = useState(false)
  const [isMediumWidth,setIsMediumWidth] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      handleAngleRight();
    }, 20000);
    return () => clearInterval(interval);

  }, [slide]);

  useEffect(()=>{
    if(window.innerWidth < 1280){ 
      setIsDesktopWidth(false)
    }
    else{
      setIsDesktopWidth(true)
    }
  },[window.innerWidth])

  useEffect(()=>{
    if(window.innerWidth < 768){ 
      setIsMediumWidth(false)
    }
    else{
      setIsMediumWidth(true)
    }
  },[window.innerWidth])

  function renderHeroHeader(){
    if(slide === 1 ){
      return "Discover innovative ways to decorate"
    }
    if(slide === 2){
      return "We are available all across the globe"
    }
    if(slide === 3){
      return "Manufactured with the best materials"
    }
  }
  
  function renderHeroText(){
    if(slide === 1){
      return "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    }
    if(slide === 2){
    return "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    }
    if(slide === 3){
      return "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  }

  function handleAngleRight(){
    if(slide < 3){
     setSlide(slide + 1)
    }
    else{
      setSlide(1)
    }
  }

  function handleAngleLeft(){
    if(slide > 1){
     setSlide(slide - 1)
    }
    else{
      setSlide(3)
    }
  }

  function handleNavbar(){
   setIsOpen(!isOpen)
  }

  const images = (isDekstopWidth) ? 'desktop': 'mobile'

  return (
    <main className="font-main">
      <section className="flex h-[40%] xl:flex-row flex-col transition-all ">
        <div className="relative w-full xl:w-[55%] h-full">
          <img src={require(`./images/${images}-image-hero-${slide}.jpg`)} alt="slide-img" className="w-full"></img>
            { isMediumWidth &&
              <nav className="flex absolute top-10 left-10 text-white gap-8 h-4">
              <img src={logo} className="mr-8 " alt="logo"></img>
              <a href="#" className='hover:border-b pb-5 text-sm border-white transition-all'>Home</a>
              <a href="#" className='hover:border-b pb-5 text-sm border-white transition-all'>Shop</a>
              <a href="#" className='hover:border-b pb-5 text-sm border-white transition-all'>About</a>
              <a href="#" className='hover:border-b pb-5 text-sm border-white transition-all'>Contact</a>
            </nav>}
            { !isMediumWidth &&
              
              <nav className='absolute w-screen right-0 left-0 top-0'>
                {
                  !isOpen &&
                <img src={hamburger} className="left-10 top-10 absolute" onClick={handleNavbar}></img> 
                }
                {
                  !isOpen &&
                <img src={logo} alt="brand logo" className='absolute top-10 right-0 left-0 mx-auto'/>
                }
                <div className={`text-black font-semibold w-screen bg-white py-8
                justify-evenly ${isOpen ? 'flex' : 'hidden'}`}>
                  <img src={cross} alt="hamburger icon" className='h-5 w-6' onClick={handleNavbar}/>
                  <div className='flex gap-4'>
                    <a href='#' className='inline-block'>Home</a>
                    <a href='#' className='inline-block'>Shop</a>
                    <a href='#' className='inline-block'>About</a>
                    <a href='#' className='inline-block'>Contact</a>
                  </div>
                </div>
              </nav>
            }
        </div>
        <div className="xl:w-[45%] w-full flex justify-center relative md:m-0 py-24 px-8 xl:p-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl max-w-lg font-semibold">
              {renderHeroHeader()}
            </h1>
            <p className="text-very-dark-gray max-w-lg text-sm my-6 lg:my-4">
              {renderHeroText()}
            </p>
            <div className="inline-block group">
              <a href="#" className="spacing-super-wide inline-block mr-8 capitalize group-hover:opacity-75">
                Shop Now
              </a>
              <img src={arrow} alt="arrow" className="h-5 selection:hidden w-20 inline-block group-hover:opacity-75 group-hover:translate-x-6 duration-500 self-start ease-out"></img>
            </div>
          </div>
          <div className="flex justify-start items-end absolute right-0 -top-16 xl:bottom-0 xl:left-0">
            <div onClick={handleAngleLeft} className="bg-black w-16 h-16 selection:hidden flex items-center justify-center hover:opacity-80">
              <img src={angleLeft} alt="angle left icon" className="" />
            </div>
            <div onClick={handleAngleRight} className="bg-black w-16 h-16 selection:hidden flex items-center justify-center hover:opacity-80">
              <img src={angleRight} alt="angle right icon" className="" />
            </div>
          </div>
        </div>
      </section>
    
      <section className="flex xl:flex-row flex-col">
        <img src={imgAboutDark} alt="background img" className="xl:w-[31%]" />
        <div className="flex items-center justify-center py-24 px-12 xl:p-20">
          <div className="flex flex-col">
            <h2 className=" mb-2 text-base font-semibold tracking-widest">
              About our furniture
            </h2>
            <p className="text-very-dark-gray text-sm max-w-xl">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <img src={imgAboutLight} alt="background img" className="xl:w-[31%]" />
      </section>
    </main>
  );
}

export default App;
