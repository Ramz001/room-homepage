import {useState,useEffect} from 'react'
import logo from './images/logo.svg';
import './index.css';

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

  return (
    <main className='font-main'>
      <section className='flex h-[40%]'>
        <div className='relative w-[55%] overflow-hidden'>
            <img src={require(`./images/desktop-image-hero-${slide}.jpg`)} className="w-full"></img>
            <nav className='flex absolute top-10 left-10 text-white gap-4 justify-between'>
              <img src={logo} className="h-6 w-20 mr-8" alt="logo"></img>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
        </div>
        <div className='w-[45%] flex flex-col justify-center'>
          <h2 className='text-5xl max-w-lg font-semibold'>{renderHeroHeader()}</h2>
          <p className='text-very-dark-gray max-w-lg text-sm my-5'>{renderHeroText()}</p>
          <div>
            <a href='#' className='spacing-super-wide'>Shop Now</a>
          </div>
        </div>
      </section>
      <section></section>
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

// Our multifunctional collection blends design and function to suit your individual taste.
// Make each room unique, or pick a cohesive theme that best express your interests and what
// inspires you. Find the furniture pieces you need, from traditional to contemporary styles
// or anything in between. Product specialists are available to help you create your dream space.
export default App;
