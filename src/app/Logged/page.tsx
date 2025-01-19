'use client'
import Animals from '@/components/LoggedComponents/Animals/Animals'
import FooterLogged from '@/components/LoggedComponents/FooterLogged/FooterLogged'
import Header from '@/components/LoggedComponents/Header/Header'
import Island from '@/components/LoggedComponents/Island/Island'
import Nature from '@/components/LoggedComponents/Nature/Nature'
import Pricing from '@/components/LoggedComponents/Pricing/Pricing'
import Variations from '@/components/LoggedComponents/Variations/Variations'
import React from 'react'
import LogoSectionDos from '@/components/LogoSection/LogoSectionDos'
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton'

const Logged: React.FC = () => {
    return (
        <div>
            <main>
                <Header />
                <section>
                    <Island />
                </section>
                <section>
                    <Nature />
                </section>
                <section>
                    <Variations />
                </section>
                <section>
                    <Animals />
                </section>
                <section>
                    <Pricing />
                </section>
                <ScrollToTopButton />
            </main>
            <section className='flex justify-center'>
                <LogoSectionDos />
            </section>
            <FooterLogged />
        </div>

    )
}

export default Logged;