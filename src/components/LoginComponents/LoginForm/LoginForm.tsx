'use client'
import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import { FcGoogle } from "react-icons/fc";
import PasswordInput from '../PasswordInput/PasswordInput';
import Footer from '../Footer/Footer';
import LogoSection from '../../LogoSection/LogoSection';
import { LoginFormData } from '@/interfaces/LoginForm';
import { useRouter } from "next/navigation";


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
        e.preventDefault();
        console.log('Form submitted:', formData);

        try {
            const response = await fetch('https://run.mocky.io/v3/9bd9774c-cc1b-471c-8aec-f6b2b524912f', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.email !== formData.email || data.password !== formData.password) {
                alert('Invalid credentials!');
                return;
            }

            router.push("/Logged");
        } catch (error) {
            console.error('Error during login:', error);
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

                    <h1 className="text-2xl font-bold">Nice to see you again</h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <fieldset className='flex flex-col md:gap-4 gap-2 p-0'>
                            <legend className="sr-only">Login credentials</legend>

                            <section className="space-y-2">
                                <label htmlFor="login" className="hidden md:block text-sm font-medium text-gray-700 ml-4">Login</label>
                                <input
                                    className="w-full px-3 py-2 border bg-[#f2f2f2] rounded-md shadow-sm"
                                    type="text"
                                    name="email" id="login"
                                    placeholder="Email"
                                    required
                                    onChange={handleInputChange}
                                    value={formData.email}
                                    aria-label="Email address" />
                            </section>

                            <section className="space-y-2">
                                <label htmlFor="password" className="hidden md:block text-sm font-medium text-gray-700 ml-4">Password</label>
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
                                    className="text-sm text-gray-700"
                                    aria-label="Remember me">Remember me</label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-[#007aff] hover:text-[#005eff]"
                                aria-label="Forgot password?">Forgot password?</a>
                        </section>

                        <button type='submit'
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm 
                        text-sm font-medium text-white bg-[#007aff] hover:bg-[#005eff] ">
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
                            className="flex items-center justify-center w-full py-2 px-4 rounded-md 
                        shadow-sm text-sm font-medium text-white bg-[#333333] hover:bg-[#1c1c1c]">
                            <FcGoogle size={25} /> Or sign in with Google
                        </button>

                        <nav className='flex justify-center gap-3 text-sm'>
                            <p className="text-center  text-gray-600"> Dont have an account? </p>
                            <a
                                href="#"
                                className="font-medium text-[#007aff] hover:text-[#005eff]"
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