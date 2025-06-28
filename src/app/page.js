 import Aboutus from '@/components/Aboutus'
import Banner from '@/components/Banner'
import Book from '@/components/Book'
import Lifestyle from '@/components/Lifestyle'
import OurService from '@/components/OurService'
import Testimonial from '@/components/Testimonial'
import Videos from '@/components/Videos'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Banner/>
      <Lifestyle/>
      <Book/>
      <OurService/>
      <Videos/>
      <Testimonial/>
      <Aboutus/>
    </div>
  )
}

export default page
