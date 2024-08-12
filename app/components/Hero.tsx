import { Section } from "./Section"
/* import BlurFade from "@/components/magicui/blur-fade"; */
import Image from 'next/image';


export const Hero = () => {
    return (
        /* <BlurFade delay={0.25} inView> */
            <Section className="flex max-lg:flex-col items-center gap-4">
                <div className="flex-[2]">
                    <h2 className="font-caption text-5xl mb-3 font-bold" >Hi, I&apos;m Mustapha Kamel Cherif 👋</h2>
                    <h3 className="text-3xl mb-3">Full Stack Developer</h3>
                    <p className="mb-2 text-md mb-3">I am a seasoned full stack developer with a passion for crafting robust and scalable web applications. With a solid foundation in both front-end and back-end technologies, I thrive in architecting solutions that marry user-centric design with efficient functionality. </p>
                    <p>Based in Montreal, Canada. 🇨🇦</p>
                </div>
                <div  className="flex-1">
                    <Image 
                        src="https://media.licdn.com/dms/image/D4E03AQHJv3a8YtyG-g/profile-displayphoto-shrink_800_800/0/1714805850697?e=1727308800&v=beta&t=WLITvdYocoOSULWOQ00OTvyLvIqvnwoEx71LoXifkqA" 
                        alt="kamel cherif"
                        className="w-full h-auto max-w-xs shadow-xl rounded-full"
                        width={500} height={500}
                    />
                </div>
            </Section>
       /*  </BlurFade> */
    )
}