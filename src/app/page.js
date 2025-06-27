import Banner from '@/components/Banner'
import Lifestyle from '@/components/Lifestyle'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Banner/>
      <Lifestyle/>
    </div>
  )
}

export default page
