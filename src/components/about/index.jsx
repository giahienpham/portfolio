import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
    return <div className={clsx('custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8',className)}>
        {children}
    </div>
}

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className='col-span-full lg:col-span-8 row-span-2 flex-col items-start'>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                    Architect of Enchantment
                </h2>
                <p className='font-light text-xs sm:text-sm md:text:base'>
                My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
                </p>
            </ItemLayout>

            <ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
            <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                25+ <sub className='font-semibold text-base'>clients</sub>
            </p>
            </ItemLayout>
            
            <ItemLayout className='col-span-full xs:col-span-6 lg:col-span-4 text-accent'>
            <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                4+ <sub className='font-semibold text-base'>years of experience</sub>
            </p>
            </ItemLayout>
            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats-test-chi.vercel.app/api/top-langs?username=giahienpham&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=27E8A7&icon_color=27E8A7&text_bold=false' 
                alt = 'HienPham' loading='lazy'/>
            </ItemLayout>
            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats-test-chi.vercel.app/api?username=giahienpham&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=27E8A7&icon_color=27E8A7&text_bold=false' 
                alt = 'HienPham' loading='lazy'/>
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,aws,cpp,docker,flask,git,gitlab,gradle,java,linux,materialui,mongodb,nestjs,nextjs,nodejs,npm,postgres,postman,pytorch,r,react,spring,tensorflow,threejs' 
                alt = 'HienPham' loading='lazy'/>
            </ItemLayout>
            
            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
            <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=giahienpham&theme=vue-dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B&sideLabels=27E8A7&sideNums=27E8A7&currStreakNum=27E8A7&fire=FB8C00" alt = 'HienPham' loading='lazy'/>
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats-test-chi.vercel.app/api/pin/?username=giahienpham&repo=hime-platform&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=27E8A7&icon_color=27E8A7&text_bold=false&description_lines_count=2' 
                alt = 'HienPham' loading='lazy'/>
            </ItemLayout>

            
        </div>
    </section>
  )
}

export default AboutDetails