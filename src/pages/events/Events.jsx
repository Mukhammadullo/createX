import React from 'react'
import Card2 from '../../components/Card2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Events = () => {
  return (
    <div>

{/* main */}
<div className='md:w-[80%] m-auto  p-5'>

<div className='flex flex-col items-center'>
  <p className='font-bold'>Our events</p>
  <p className='text-[50px] font-bold'>Lectures, workshops & master-classes</p>
</div>


<div>
{/* row1 */}
<div className='md:flex justify-around my-8'>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
</div>
{/* row2 */}
<div className='md:flex justify-around my-8'>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
</div>
{/* row3 */}
<div className='md:flex justify-around my-8'>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
  <Card2 data={'05 Aug '} time={'11:00 – 14:00'} txt={'Formation of the organizational structure of the company in the face of uncertainty.'} innertxt={'Onine master-class'} ></Card2>
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

export default Events