'use client'
import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import { FcGoogle } from "react-icons/fc";
import PasswordInput from '../PasswordInput/PasswordInput';
import Footer from '../Footer/Footer';
import LogoSection from '../../LogoSection/LogoSection';
import { LoginFormData } from '@/interfaces/LoginForm';
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';
import { loginUser } from '@/utils/authService';


const LoginForm: React.FC = () => {
    const router = useRouter();
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        e.preventDefault();

        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email.',
            });
            return;
        }

        const isLoginSuccessful = await loginUser(formData.email, formData.password, rememberMe);

        if (isLoginSuccessful) {
            router.push('/Logged');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid credentials.',
                text: 'Please verify your email and password.',
            });
        }

        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <section className='min-h-screen flex flex-col md:w-[90%] w-[100%] px-5'>
            <section className='flex-grow flex flex-col'>
                <section className="w-full max-w-md mx-auto space-y-6">
                    <section className='hidden md:block'>
                        <LogoSection />
                    </section>

                    <h1 className="text-2xl font-semibold typography--poppins text-[20px] text-[#1A1A1A]">Nice to see you again</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <fieldset className='flex flex-col md:gap-4 gap-2 p-0'>
                            <legend className="sr-only">Login credentials</legend>

                            <section className="space-y-2">
                                <label htmlFor="login" className="hidden md:block text-[11px] text-[#333333] ml-4 typography--family-sf-pro-display">Login</label>
                                <input
                                    className="w-full px-3 py-2 border bg-[#f2f2f2] rounded-md shadow-sm typography--family-robot text-[15px] font-normal"
                                    type="email"
                                    name="email" id="login"
                                    placeholder="Email"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.email}
                                    aria-label="Email address" />
                            </section>

                            <section className="space-y-2">
                                <label htmlFor="password" className="hidden md:block text-[11px] text-[##333333] ml-4 typography--family-sf-pro-display">Password</label>
                                <PasswordInput
                                    id="password"
                                    placeholder="Enter password"
                                    name="password"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.password}
                                    aria-label="Password" />
                            </section>

                        </fieldset>

                        <section className='flex justify-between items-center'>
                            <div className="flex items-center space-x-2">
                                <Switch checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                <label
                                    htmlFor="remember"
                                    className="text-[12px] text-[#1A1A1A] typography--family-sf-pro-display"
                                    aria-label="Remember me">Remember me</label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-[#007AFF] hover:text-[#005eff] text-[12px] typography--family-sf-pro-display"
                                aria-label="Forgot password?">Forgot password?</a>
                        </section>

                        <button type='submit'
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm 
                        text-[15px] font-bold text-white bg-[#007AFF] hover:bg-[#005eff] typography--family-robot">
                            Sign in
                        </button>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-2 py-6 text-gray-500"></span>
                            </div>
                        </div>

                        <button type="button"
                            className="flex items-center justify-center w-full gap-2 py-2 px-4 rounded-md 
                        shadow-sm text-[12px] text-white bg-[#333333] hover:bg-[#1c1c1c] typography--family-sf-pro-display">
                            <FcGoogle size={25} /> Or sign in with Google
                        </button>

                        <nav className='flex justify-center gap-3 text-sm'>
                            <p className="text-center text-[#1A1A1A] typography--family-sf-pro-display text-[12px]"> Dont have an account? </p>
                            <a
                                href="#"
                                className="font-medium text-[#007AFF] hover:text-[#005eff] typography--family-sf-pro-display text-[12px]"
                                aria-label="Sign up now">Sign up now</a>
                        </nav>

                    </form>

                    <section className='flex justify-center md:hidden'>
                        <LogoSection />
                    </section>
                </section>
            </section>
            <Footer />
        </section>
    )
}

export default LoginForm;