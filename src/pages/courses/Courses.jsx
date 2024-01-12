import React from 'react'
import TextField from '@mui/material/TextField';
import Card1 from '../../components/Card1';
import Button from '@mui/material/Button';

const Courses = () => {
  return (
    <div>

{/* main */}
<div className='md:w-[80%] m-auto'>

{/* title */}
<div className=' m-auto py-4'>
<h1 className='font-bold text-center'>Enjoy your studying!</h1>
<p className='md:text-[40px] font-bold text-center'>Our online courses</p>
</div>

{/* rows */}
<div className='md:flex justify-between  mob:mx-3 md:mx-0  py-4'>
  
<ul className='md:flex md:w-[80%]  font-mono justify-between items-center'>
  <li className='text-[red]'>All</li>
  <li>Marketing</li>
  <li>Management</li>
  <li>HR & Recruting</li>
  <li>Design</li>
  <li>Development</li>
</ul>

<div>
<TextField id="outlined-basic" label="Search course..." variant="outlined"  />
</div>
</div>


<div>
  
{/* Row1 */}
<div className='md:flex justify-between'>
  <Card1 img={"src/assets/im8.svg"} title={"Marketing"} txt={"The Ultimate Google Ads Training Course"} price={"$100/by Jerome Bell"} />
  <Card1 img={"src/assets/im2.svg"} title={"Development"} txt={"Prduct Management Fundamentals"} price={"$230/by Jerome Bell"} />
  <Card1 img={"src/assets/im3.svg"} title={"BAckend"} txt={"HR  Management and Analytics"} price={"$450/by Jerome Bell"} />
</div>


{/* Row2 */}
<div className='md:flex justify-between my-8'>
  <Card1 img={"src/assets/im4.svg"} title={"Marketing"} txt={"The Ultimate Google Ads Training Course"} price={"$100/by Jerome Bell"} />
  <Card1 img={"src/assets/im5.svg"} title={"Design"} txt={"Prduct Management Fundamentals"} price={"$230/by Jerome Bell"} />
  <Card1 img={"src/assets/im6.svg"} title={"Marketing"} txt={"HR  Management and Analytics"} price={"$450/by Jerome Bell"} />
</div>

{/* Row3 */}
<div className='md:flex justify-between my-8'>
  <Card1 img={"src/assets/im7.svg"} title={"HR & Recruting"} txt={"The Ultimate Google Ads Training Course"} price={"$100/by Jerome Bell"} />
  <Card1 img={"src/assets/im8.svg"} title={"Marketing"} txt={"Prduct Management Fundamentals"} price={"$230/by Jerome Bell"} />
  <Card1 img={"src/assets/im9.svg"} title={"Design"} txt={"HR  Management and Analytics"} price={"$450/by Jerome Bell"} />
</div>
</div>


{/* swiper */}
{/* <div className='bg-[#F4F5F6]'></div> */}


{/* Certificite */}
<div>

<div className='md:flex items-center mob:mx-3 md:mx-0'>
  {/* left */}
  <div>
    <p className='font-bold'>Createx Certificate</p>
    <p className='text-[40px] font-bold'>Your expertise will be confirmed</p>
    <p className='font-mono'>We are accredited by international professional organizations and institutes:</p>
    <img src="src/assets/er.svg" alt="" />
  </div>
  {/* right */}
  <div>
    <img src="src/assets/image.svg" alt="" />
  </div>
</div>

</div>


{/* Subscribe */}
<div className='bg-[#d36966aa] flex justify-center p-8'>
<div className='w-[60%] text-center'>
  <p className='font-bold'>Don’t miss anything</p>
  <p className='font-bold md:text-[50px]'>Subscribe to the Createx School announcements</p>

  <div className='md:flex items-center justify-evenly'>
<TextField id="outlined-basic" label="Search course..." variant="outlined"  />
<Button variant="contained">Contained</Button>
</div>
</div>

</div>


</div>
 </div>
  )
}

export default Courses