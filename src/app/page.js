'use client';

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
      <section id="home"><Banner /></section>
      <section id="lifestyle"><Lifestyle /></section>
      <section id="book"><Book /></section>
      <section id="our_services"><OurService /></section>
      <section id="videos"><Videos /></section>
      <section id="review"><Testimonial /></section>
      <section id="about"><Aboutus /></section>
      <section id="booknow"><BookNow /></section>
      <section id="contact"><Contact /></section>
      <section id="location"><Location /></section>
    </div>
  )
}

export default page
