'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LoginForm from '../../components/LoginComponents/LoginForm/LoginForm'
import { imageCarousel } from '@/utils/items'

const Login: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCarousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex justify-center items-center min-h-screen w-full'>
      <section className='flex w-full h-[100vh] overflow-hidden'>
        <section className='relative w-[65%] hidden md:block'>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={imageCarousel[currentImageIndex]}
              alt="Login background"
              fill
              sizes="(max-width: 1366px) 70vw, 956px"
              className="object-cover object-center"
              priority
            />
          </div>
        </section>
        <section className="w-full md:w-[35%] flex justify-center items-start">
          <LoginForm />
        </section>
      </section>
    </main>
  )
}
export default Login;