import React from 'react'
import Text from '../../components/Text'
import Card from '../../components/Card'
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';


function Home() {
    return (
        <div>

            {/* main */}
            <main>

                {/* section 1 */}
                <section className='bg-[rgb(254,220,210)] py-[80px] px-[120px] p-[24px]'>
                    <div className='flex items-center justify-between sm:flex-wrap sm:gap-[40px]'>
                        <aside className='flex flex-col items-start gap-[40px]'>
                            <div className='flex items-center gap-[8px]'>
                                <img src="src/assets/header/hover.png" alt="" />
                                <p className='text-[14px]'>Play showreel</p>
                            </div>
                            <div className='flex flex-col gap-[60px]'>
                                <h1 className='w-[496px] md:w-[496px] lg:text-[64px] md:text-[64px] sm:text-[32px] font-[700]'>Enjoy studying with Createx Online Courses</h1>
                                <div className='flex items-center gap-[36px]'>
                                    <button className='border-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#F75E05]'>About us</button>
                                    <button className='bg-[#F75E05] px-[30px] py-[10px] rounded-[4px] text-white'>Get consultation</button>
                                </div>
                            </div>
                        </aside>
                        <aside>
                            <img src="src/assets/illustration.svg" alt="" />
                        </aside>
                    </div>


                    <div className='flex items-center justify-between sm:flex-wrap sm:pt-[50px] lg:pt-[200px] sm:gap-[24px]'>
                        <Text h1={"1200"} p={"Students graduated"} />
                        <img src="src/assets/header/ellipse.png" className="lg:block sm:hidden" />
                        <Text h1={"84"} p={"Completed courses"} />
                        <img src="src/assets/header/ellipse.png" className="lg:block sm:hidden" />
                        <Text h1={"16"} p={"Qualified tutors"} />
                        <img src="src/assets/header/ellipse.png" className="lg:block sm:hidden" />
                        <Text h1={"5"} p={"Years of experience"} />
                    </div>
                </section>

                {/* section 2 */}
                <section className='lg:py-[180px] lg:px-[120px] sm:p-[24px]'>

                    <div className='flex justify-between items-center sm:flex-wrap sm:gap-[40px]'>
                        {/* left */}
                        <aside>
                            <img src="src/assets/home/image (47).png" alt="" />
                        </aside>
                        {/* right */}
                        <aside className='flex flex-col gap-[40px]'>
                            <div>
                                <p className='font-[700] uppercase'>Who we are</p>
                                <h1 className='text-[46px] font-[700]'>Why Createx?</h1>
                            </div>
                            <div className='flex flex-col items-start gap-[12px]'>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />Vulputate placerat amet pulvinar lorem nisl.</p>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />Etiam duis lobortis in fames ultrices commodo nibh.</p>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />Tincidunt sagittis neque sem ac eget.</p>
                                <p className='lg:w-[358px] md:w-[358px] flex items-start gap-[16px]'><img src="src/assets/home/check.png" alt="" />Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
                            </div>
                            <button className='bg-[#F75E05] px-[30px] py-[10px] w-[200px] rounded-[4px] text-white'>More about us</button>
                        </aside>
                    </div>

                </section>


                {/* section 3 */}
                <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
                    <div className='flex items-end lg:justify-between md:justify-between sm:justify-center sm:flex-wrap sm:gap-[20px]'>
                        <div>
                            <p className='font-[700] uppercase sm:text-center lg:text-star md:text-start'>Ready to learn?</p>
                            <h1 className='lg:text-[46px] sm:text-[32px] font-[700] sm:text-center md:text-start lg:text-start'>Featured Courses</h1>
                        </div>
                        <button className='border-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#F75E05]'>View all courses</button>
                    </div>
                    <main className='flex flex-wrap items-center lg:gap-[75px] lg:py-[80px] sm:py-[40px] sm:justify-center lg:justify-start sm:gap-[40px]'>
                        <Card
                            img={"src/assets/home/card1/image.png"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                        <Card
                            img={"src/assets/home/card1/photo_1_2024-01-12_11-39-08.jpg"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                        <Card
                            img={"src/assets/home/card1/photo_2_2024-01-12_11-39-08.jpg"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                        <Card
                            img={"src/assets/home/card1/photo_3_2024-01-12_11-39-08.jpg"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                        <Card
                            img={"src/assets/home/card1/photo_5_2024-01-12_11-39-08.jpg"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                        <Card
                            img={"src/assets/home/card1/photo_6_2024-01-12_11-39-08.jpg"}
                            h1={"The Ultimate Google Ads Training Course"}
                            btn={"Marketing"}
                            p={"by Jerome Bell"}
                            span={"$100"}
                        />
                    </main>
                </section>

                {/* section 4 */}
                <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
                    <div>
                        <p className='font-[700] uppercase text-center'>Our benefits</p>
                        <h1 className='lg:text-[46px] sm:text-[32px] font-[700] text-center'>That’s how we do it</h1>
                    </div>

                    <div className='flex justify-center lg:py-[60px] sm:flex-wrap sm:gap-[20px] sm:py-[40px]'>
                        <button className='border-[#F75E05] border-[1px] px-[50px] py-[10px] rounded-[4px] text-[#F75E05]'> 🔆 Experienced Tutors</button>
                        <button className='px-[50px] py-[10px] rounded-[4px] text-[#F75E05]'> 🤕 Feedback & Support </button>
                        <button className=' px-[50px] py-[10px] rounded-[4px] text-[#F75E05]'> 😒 24/7 Online Library</button>
                        <button className='px-[50px] py-[10px] rounded-[4px] text-[#F75E05]'> 😆 Community</button>
                    </div>

                    <main className='flex justify-center items-center lg:py-[40px] sm:flex-wrap'>
                        {/* left */}
                        <aside className='flex flex-col gap-[24px]'>
                            <h1 className='font-[700] text-[32px]'>Only practicing tutors</h1>
                            <p className='lg:w-[495px]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                        </aside>
                        {/* right */}
                        <aside>
                            <img src="src/assets/home/illustration (1).png" alt="" />
                        </aside>
                    </main>
                </section>


                {/* section 5 */}
                <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px] bg-[rgb(254,222,207)]'>
                    <div>
                        <p className='font-[700] uppercase text-center'>Our Events</p>
                        <h1 className='lg:text-[46px] sm:text-[32px] font-[700] text-center'>Lectures & workshops</h1>
                    </div>
                    <div className='flex flex-col items-center lg:py-[80px] gap-[20px] sm:flex-wrap'>
                        <Card3 number={"05"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
                        <Card3 number={"05"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
                        <Card3 number={"05"} btn={"View more"} month={"August"} data={"11:00 – 14:00"} text={"Formation of the organizational structure of the company in the face of uncertainty."} p={"Onine master-class"} />
                    </div>

                    <aside className='justify-center flex items-center gap-[40px] sm:flex-wrap sm:pt-[24px]'>
                        <h1 className='font-[700] items-center text-[28px]'>Do you want more?</h1>
                        <button className='bg-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#fff]'>Explore all events</button>
                    </aside>
                </section>


                {/* section 6*/}
                <section className='lg:py-[80px] lg:px-[120px] sm:p-[24px]'>

                    <div className='flex justify-between sm:flex-wrap sm:gap-[20px] items-start'>
                        {/* left */}
                        <aside className='flex flex-col gap-[20px]'>
                            <div>
                                <p className='font-[700] uppercase'>Createx Certificate</p>
                                <h1 className='lg:text-[46px] sm:text-[32px] lg:w-[392px] font-[700]'>Your expertise will be confirmed</h1>
                            </div>
                            <p className='lg:w-[392px]'>We are accredited by international professional organizations and institutes:</p>
                            <div className='flex items-center gap-[20px]'>
                                <img src="src/assets/home/logo (7).png" alt="" />
                                <img src="src/assets/home/logo (8).png" alt="" />
                                <img src="src/assets/home/logo (9).png" alt="" />
                            </div>
                        </aside>


                        {/* right */}
                        <aside>
                            <img src="src/assets/home/image (48).png" alt="" />
                        </aside>
                    </div>
                </section>


                {/* section 7 */}
                <section className='lg:py-[80px] bg-[#F4F5F6] lg:px-[120px] sm:p-[24px]'>
                    <aside className='flex items-end justify-between sm:flex-wrap'>
                        <div>
                            <p className='font-[700] uppercase'>Best tutors are all here</p>
                            <h1 className='lg:text-[46px] sm:text-[32px] lg:w-[392px] font-[700]'>Meet our team</h1>
                        </div>
                        <img src="src/assets/home/hover.png" alt="" />
                    </aside>
                    <aside className='flex items-center lg:justify-between lg:py-[50px] sm:gap-[20px] sm:py-[40px] sm:flex-wrap lg:flex-nowrap sm:justify-center'>
                        <Card4 h1={"Dianne Russell"} p={"Founder and CEO"} img={"src/assets/home/card1/photo_1_2024-01-12_11-39-08.jpg"} />
                        <Card4 h1={"Jerome Bell"} p={"Marketer, Curator of Marketing Course"} img={"src/assets/home/card1/photo_2_2024-01-12_11-39-08.jpg"} />
                        <Card4 h1={"Marvin McKinney"} p={"PM, Curator of Management Course"} img={"src/assets/home/card1/photo_3_2024-01-12_11-39-08.jpg"} />
                        <Card4 h1={"Dianne Russell"} p={"Founder and CEO"} img={"src/assets/home/card1/photo_5_2024-01-12_11-39-08.jpg"} />

                    </aside>
                </section>

                {/* section 8 */}
                <section className=' bg-[rgb(254,222,207)] mob:hidden md:block'>
                    <div className='flex flex-col items-center lg:py-[80px] lg:px-[120px] sm:p-[24px]'>
                        <p className='font-[700] uppercase text-center'>Don’t miss anything</p>
                        <h1 className='lg:text-[46px] lg:w-[820px]  sm:text-[32px] font-[700] text-center'>Subscribe to the Createx School announcements</h1>
                    </div>
                    <div className='flex justify-between items-start'>
                        <img src="src/assets/home/illustration (2).png" alt="" />
                        <aside className='justify-center flex items-center gap-[40px] sm:flex-wrap sm:pt-[24px]'>
                            <input type="text" placeholder='Your working email' className='px-[10px] w-[300px] py-[12px] rounded-[4px]' />
                            <button className='bg-[#F75E05] border-[1px] px-[30px] py-[10px] rounded-[4px] text-[#fff]'>Subscribe</button>
                        </aside>
                        <img src="src/assets/home/illustration (2).png" alt="" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home