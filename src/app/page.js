import Banner from '@/components/Banner'
import Book from '@/components/Book'
import Lifestyle from '@/components/Lifestyle'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Banner/>
      <Lifestyle/>
      <Book/>
    </div>
  )
}

export default page
