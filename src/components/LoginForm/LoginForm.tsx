'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Switch from '../Switch/Switch'
import { FcGoogle } from "react-icons/fc";
import PasswordInput from '../PasswordInput/PasswordInput';
import Footer from '../Footer/Footer';

const LoginForm = () => {
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const LogoSection = () => {
        return (
            <div className='flex items-center my-9 gap-1'>
                <Image
                    src='https://res.cloudinary.com/dtoditltb/image/upload/v1737067692/Imagen_de_WhatsApp_2025-01-16_a_las_17.44.53_3293ed02__1_-removebg-preview_ag1wvj.png'
                    alt='ui-unicorn'
                    width={40}
                    height={40}
                />
                <span className="text-xl font-semibold">UI Unicorn</span>
            </div>
        )
    }

    return (
        <section className='md:w-[60%] w-[90%]'>
            <section className="w-full max-w-md mx-auto space-y-6">
                <div className='hidden md:block'>
                    <LogoSection />
                </div>
                <h2 className="text-2xl font-bold">Nice to see you again</h2>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="login" className="hidden md:block text-sm font-medium text-gray-700">Login</label>
                        <input type="text" id="login" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="hidden md:block text-sm font-medium text-gray-700">Password</label>
                        <PasswordInput id="password" placeholder="Enter password" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center space-x-2">
                            <Switch checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-[#007aff] hover:text-[#005eff]">Forgot password?</a>
                    </div>
                    <button type='submit' className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007aff] hover:bg-[#005eff] ">
                        Sign in
                    </button>

                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500"></span>
                        </div>
                    </div>

                    <button type="button" className="flex items-center justify-center w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#333333] hover:bg-[#1c1c1c]">
                        <FcGoogle size={25} /> Or sign in with Google
                    </button>
                    <div className='flex justify-center gap-3 text-sm'>
                     <p className="text-center  text-gray-600"> Dont have an account? </p>
                     <a href="#" className="font-medium text-[#007aff] hover:text-[#005eff]">Sign up now</a>
                    </div>
                    
                </form>

                <div className='flex justify-center md:hidden'>
                    <LogoSection />
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default LoginForm