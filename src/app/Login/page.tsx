'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login: React.FC = () => {
  const [windowHeight, setwindowHeight] = useState<number>(0)

  useEffect(() => {
    const updateHeight = () => {
      setwindowHeight(window.innerHeight)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <main className='flex justify-center min-h-screen w-full'>
      <section className='flex w-full max-w-[1366px]'>
        <section className='relative w-[65%] hidden md:block'
          style={{ height: `${windowHeight}px` }}>
          <Image
            src="https://res.cloudinary.com/dtoditltb/image/upload/v1737060649/photo-1638718358942-ea45a721867b_uior81.avif"
            alt="Login background"
            fill
            sizes="(max-width: 1366px) 70vw, 956px"
            className="object-cover"
            priority
          />
        </section>
        <section className="w-full md:w-[45%] flex justify-center items-start">
          <LoginForm />
        </section>
      </section>
    </main>
  )
}
export default Login