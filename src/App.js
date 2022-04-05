import {useState} from 'react'
import logo from './images/logo.svg';
import './index.css';
import arrow from './images/icon-arrow.svg';
import angleLeft from './images/icon-angle-left.svg';
import angleRight from './images/icon-angle-right.svg';
import imgAboutDark from './images/image-about-dark.jpg';
import imgAboutLight from './images/image-about-light.jpg';
import hamburger from './images/icon-hamburger.svg';


function App() {
  const [slide, setSlide] = useState(1);

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


  return (
    <main className='font-main'>
      <section className='flex md:h-[40%] md:flex-row flex-col'>
        <div className='relative w-full lg:w-[55%] h-full'>
            <img src={require(`./images/desktop-image-hero-${slide}.jpg`)} className="w-full"></img>
            <img src={hamburger} alt="icon" className='absolute top-10 left-10 md:hidden'/>
            <nav className='hidden md:flex md:absolute top-10 left-10 text-white gap-4 '>
            <img src={logo} className="h-6 w-20 mr-8" alt="logo"></img>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
        </div>
        <div className='lg:w-[45%] w-full flex  justify-center relative md:m-0 p-20'>
          <div className='flex flex-col  justify-center'>
            <h2 className='text-4xl max-w-lg font-semibold'>{renderHeroHeader()}</h2>
            <p className='text-very-dark-gray max-w-lg text-sm my-5'>{renderHeroText()}</p>
            <div className='inline-block group '>             
              <a href='#' className='spacing-super-wide inline-block mr-8 group-hover:opacity-75'>Shop Now</a>
              <img src={arrow} alt="arrow" className='h-5 selection:hidden w-20 inline-block group-hover:opacity-75  group-hover:translate-x-6 duration-500 self-start ease-out'></img>
            </div>
          </div>
          <div className='flex justify-start items-end absolute bottom-0 left-0'>
            <div onClick={handleAngleLeft} className='bg-black w-16 h-16 selection:hidden flex items-center justify-center hover:opacity-80'>
              <img src={angleLeft} alt="angle left icon" className=''/>
            </div>
            <div onClick={handleAngleRight} className='bg-black w-16 h-16 selection:hidden flex items-center justify-center hover:opacity-80'>
              <img src={angleRight} alt="angle right icon" className=''/>
            </div>
          </div>

        </div>
      </section>
      <section className='flex md:flex-row flex-col'>
        <img src={imgAboutDark} alt="background img" className='md:w-[33%]'/>
        <div className='flex items-center justify-center md:p-8  p-20'>
          <div className='flex flex-col'>
            <h3 className=' mb-2 text-base font-semibold '>About our furniture</h3>
            <p className='text-very-dark-gray text-sm max-w-xl'>
              Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
        </div>
        <img src={imgAboutLight} alt="background img" className='md:w-33%'/>
      </section>
    </main>
  );
}

// Home
// Shop
// About
// Contact

// Discover innovative ways to decorate

// We provide unmatched quality, comfort, and style for property owners across the country. 
// Our experts combine form and function in bringing your vision to life. Create a room in your 
// own style with our collection and make your property a reflection of you and what you love.

// Shop now

// We are available all across the globe

// With stores all over the world, it's easy for you to find furniture for your home or place of business. 
// Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
// store locator. Any questions? Don't hesitate to contact us today.

// Shop now

// Manufactured with the best materials



// Shop now

// About our furniture


export default App;
