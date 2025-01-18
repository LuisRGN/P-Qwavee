import Animals from '@/components/LoggedComponents/Animals/Animals'
import FooterLogged from '@/components/LoggedComponents/FooterLogged/FooterLogged'
import Header from '@/components/LoggedComponents/Header/Header'
import Island from '@/components/LoggedComponents/Island/Island'
import LogoSection from '@/components/LogoSection/LogoSection'
import Nature from '@/components/LoggedComponents/Nature/Nature'
import Pricing from '@/components/LoggedComponents/Pricing/Pricing'
import Variations from '@/components/LoggedComponents/Variations/Variations'
import React from 'react'

const Logged = () => {
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
            </main>
            <section className='flex justify-center'>
                <LogoSection />
            </section>
            <FooterLogged />
        </div>

    )
}

export default Logged