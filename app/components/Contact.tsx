import { ArrowUpRight } from "lucide-react"
import { Section } from "./Section"
import Image from 'next/image';
import Link from 'next/link'
import clsx from 'clsx';
import { Poiret_One } from "next/font/google";

const permanentMarker = Poiret_One({
    subsets: ['latin'], // Personnalisez selon vos besoins
    weight: '400',      // Ajoutez d'autres styles si nécessaire
  });
  
export const Contact = () => {
    return (
        /* <BlurFade delay={0.25} inView> */
            <Section className="flex flex-col">
                <p className={clsx(permanentMarker.className,'text-xl')}>Contact me</p>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">I will be happy to work with you.</h2>
                <div className="flex max-md:flex-col gap-4"> 
                    {CONTACT.map((link, index) => (
                        <ContactBloc
                            key={index}
                            name={link.name}
                            image={link.image}
                            mediumImage={link.mediumImage}
                            description={link.description}
                            url={link.url}
                        />
                    ))}
                </div>
            </Section>
        /* </BlurFade> */
    )
}

// COntact //
const CONTACT: ContactProps[] = [
    {
        name: "kamelcherifpro@gmail.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKbiNgUTPBSzgIHqXCY-supF22Qayq9I7JaXeyfmpq4_FCF0aE=s288-c-no",
        mediumImage: "https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_hSykdMC.jpeg",
        description:"Contact me via Gmail.",
        url: "mailto:kamelcherifpro@gmail.com"
    },
    {
        name: "Mustapha kamel cherif",
        image: "/me.png",
        mediumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png",
        description:"Contact me via Linkedin.",
        url: "https://linkedin.com/in/musmustapha-kamel-chérif"
    },
    {
        name: "@kamelchx",
        image: "https://pbs.twimg.com/profile_images/1819851609439875072/T8cTHAQp_400x400.jpg",
        mediumImage: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg",
        description:"Contact me via Twitter X.",
        url: "https://x.com/kamelxch"
    },
]

type ContactProps = {
    name: string,
    image: string,
    mediumImage: string,
    description: string,
    url:string,
}

const ContactBloc = (props: ContactProps) =>{
    return (
        <Link href={props.url} className="w-full p-2 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group cursor-pointer shadow-md">
            <div className="relative ">
                <Image src={props.image} alt={props.name} className="w-11 h-11 rounded-full object-contain" width={100} height={100}/>
                <Image src={props.mediumImage} alt={props.name} className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain" width={100} height={100}/>
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-sm leading-7 [&:not(:first-child)]:mt-6">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>        
            </div>
            <ArrowUpRight size={16} className="group-hover:translate-x-2  mr-4 group-hover:-translate-y-2 transition-transform"/>
        </Link>
    )
}
