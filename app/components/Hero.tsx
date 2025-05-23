import { Section } from "./Section"
import Image from 'next/image';

export const Hero = () => {
    return (
            <Section className="flex max-lg:flex-col items-center gap-10">
                <div className="flex-[3]">
                    <h2 className="font-caption text-4xl md:text-6xl lg:text-6xl mb-2 md:mb-3 font-bold">
                        Hi, I&apos;m Mustapha
                    </h2>
                    <h2 className="font-caption text-4xl md:text-6xl lg:text-6xl mb-6 md:mb-8 font-bold">
                        Kamel Cherif 👋
                    </h2>
                    <h3 className="text-xl md:text-3xl lg:text-[30px] mb-2 md:mb-3">
                        Full Stack Developer
                    </h3>
                    <p className="mb-2 text-md md:text-md mb-3">
                        I&apos;m a full-stack developer passionate about crafting scalable web applications that blend user-centric design with efficient functionality.
                    </p>
                    <p className="text-md md:text-md">
                        Based in Montreal, Canada 🇨🇦
                    </p>
                </div>
                <div  className="flex-1">
                    <Image 
                        src="/me.png" 
                        alt="kamel cherif"
                        className="w-full h-auto max-w-xs rounded-full"
                        width={300} height={300}
                    />
                </div>
            </Section>
    )
}