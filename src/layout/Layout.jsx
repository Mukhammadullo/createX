import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import { Outlet , Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>

{/* header */}
<header className='md:w-[80%] m-auto flex py-4  justify-around items-center '>

<div>
  <img src="src/assets/logo.svg" alt="" />
</div>

<ul className='flex justify-around items-center mob:hidden md:inline-flex text-[#424551] font-medium w-[50%] '>
  <Link to="/about">
  <li>About Us</li>
  </Link>
  <Link to="/courses">
  <li>Courses</li>
  </Link>
  <Link to="/events">
  <li>Events</li>
  </Link>
  <Link to="/blog">
  <li>Blog</li>
  </Link>
  <Link to="contacts">
  <li >Contacts</li>
  </Link>
</ul>


<div className='flex items-center'>
<Button variant="contained"  sx={{background:"#FF3F3A"}}>Get consultation</Button>
<p >Log in / Register</p>
</div>

</header>

<div>
{/* Outlied */}
<Outlet></Outlet>
</div>


{/* footer */}


<footer className='bg-[#1E212C] text-[white] mob:px-2 md:px-0    '>

<div className='md:w-[80%] m-auto'>

<div className='md:flex justify-around py-8'>

  <div className='md:w-[18%] '>
    <img src="src/assets/logo (1).svg" alt="" />
    <p className='my-5 text-[14px]'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
    <img src="src/assets/socials.svg" alt="" />
  </div>
  
  <div className='md:w-[10%] '>
    <ul>
      <li className='font-bold'>SITE MAP</li>
      <li className='py-2'>About Us</li>
      <li className='py-2'>Courses</li>
      <li className='py-2'>Events</li>
      <li className='py-2'>Blog</li>
      <li className='py-2'>Contacts</li>
    </ul>
  </div>
  
  <div className='md:w-[10%] '>
    <ul>
      <li className='font-bold'>COURSES</li>
      <li className='py-2'>Marketing</li>
      <li className='py-2'>Management</li>
      <li className='py-2'>HR & Recruting</li>
      <li className='py-2'>Design</li>
      <li className='py-2'>Development</li>
    </ul>
  </div>
  
  <div className='md:w-[10%] '>
    <ul>
      <li className='font-bold'>CONTACT US</li>
      <li className='py-2'>(405) 555-0128</li>
      <li className='py-2'>hello@createx.com</li>
    </ul>
  </div>
  
  <div className='md:w-[20%] '>
    <p className='py-3 font-bold'>SIGN UP TO OUR NEWSLETTER</p>
    <TextField id="outlined-basic" label="Email address" variant="outlined" className='bg-[#4766926b]' />
    <p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
  </div>
</div>


</div>

<div className='bg-[#4766926b] '>
<div className='flex justify-around py-4'>

  <div className='flex'>
  <p>© All rights reserved.</p>
  <p>Made with</p>
  <p>by Createx Studio </p>
  </div>
<div>
  <p>
  GO TO TOP
  </p>
</div>
</div>
</div>

</footer>

    </div>
  )
}

export default Layout