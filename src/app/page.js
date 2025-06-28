 import Aboutus from '@/components/Aboutus'
import Banner from '@/components/Banner'
import Book from '@/components/Book'
import BookNow from '@/components/BookNow'
import Contact from '@/components/Contact'
import Lifestyle from '@/components/Lifestyle'
import Location from '@/components/Location'
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
      <BookNow/>
      <Contact/>
      <Location/>
    </div>
  )
}

export default page
