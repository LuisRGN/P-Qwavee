import Image from "next/image"

const LogoSectionDos: React.FC = () => {
    return (
        <header className='flex items-center my-9 gap-1'>
            <Image
                src='https://res.cloudinary.com/dtoditltb/image/upload/v1737067692/Imagen_de_WhatsApp_2025-01-16_a_las_17.44.53_3293ed02__1_-removebg-preview_ag1wvj.png'
                alt='Logo-de-UI-Unicorn'
                width={60}
                height={60}
                priority
            />
            <span className="text-2xl font-semibold">UI Unicorn</span>
        </header>
    )
}

export default LogoSectionDos;