import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Activity, Badge, BusFront, Cable, Car, Cloudy, Code, Figma, Home, Library, Link, LucideIcon, Projector, Slack, Zap } from "lucide-react";
/* import BlurFade from "@/components/magicui/blur-fade"; */
import Image from 'next/image';

export const Status = () => {
    return (
        /* <BlurFade delay={0.25} inView> */
            <Section className="flex flex-col">
                <p className="text-xl text-muted-foreground">About me</p>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">My Projects, Experiences, and Education</h2>
                <div className="flex max-md:flex-col itemsflex-start pt-0 gap-4 h-full">
                    <div className="flex-[3] w-full">
                        <Card className="w-full p-4 flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground mb-1">Side, fun projects. </p>
                            <div className="flex flex-col gap-4">
                            {SIDE_PROJECTS.map((project, index) => (
                                    <SideProject
                                    key={index}
                                    logo={project.logo}
                                    title={project.title}
                                    description={project.description}
                                    url="/"/>
                                ))}

                            </div>
                        </Card>
                    </div>
                    <div className="flex-[2] flex flex-col gap-2 w-full">
                        <Card className="p-4 flex-1">
                            <p className="text-sm text-muted-foreground mb-2">Experiences</p>
                            <div className="flex flex-col gap-4">
                                {EXPERIENCES.map((work, index) => ( 
                                    <Experience
                                    key={index}
                                    image={work.image}
                                    title={work.title}
                                    role={work.role}
                                    date={work.date}
                                    url={work.url}
                                    />
                                ))}

                            </div>
                        </Card>
                        <Card className="p-4 flex-1">
                            <p className="text-sm text-muted-foreground mb-2">Education</p>
                            <div className="flex flex-col gap-4">
                                {EDUCATION.map((school, index) => ( 
                                    <Education
                                    key={index}
                                    image={school.image}
                                    title={school.title}
                                    city={school.city}
                                    curriculum={school.curriculum}
                                    date={school.date}
                                    url={school.url}
                                    />
                                ))}

                            </div>
                        </Card>
                    </div>
                </div> 
            </Section>
       /*  </BlurFade> */
    )
};

// Projets //
const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        logo: Code,
        title: "FIlmFinder",
        description: "A platform with a vast film directory where users can rate and comment on movies.",
        url:"/"
    },
    {
        logo: Car,
        title: "Autoccasion",
        description: "A car dealership site with a built-in CRM to manage sales and customer relationships.",
        url:"/"
    },
    {
        logo: Library,
        title: "Library",
        description: "A platform for selling books.",
        url:"/"
    },
    {
        logo: Cloudy,
        title: "Cloudy",
        description: "A platform for checking weather forecasts and current conditions.",
        url:"/"
    },
]

type SideProjectsProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
}

const SideProject = (props: SideProjectsProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex item-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
            <span className="bg-accent text-accent-forground p-4 rounded-sm">
                <props.logo size={20}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    )
}


// Experience //
const EXPERIENCES: ExperienceProps[] = [
    {
        image: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
        title: "Freelancer",
        role: "Full Stack Developer",
        date: "July 2024 - Until Today",
        url: "/",
    },
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQGtRK85Qemeew/company-logo_100_100/0/1631324350610?e=1729728000&v=beta&t=zV2zjyyUWXH0Ux8WF8eZp9j3Tkw2lpaQjAUhYxsPPMs",
        title: "Planhub",
        role: "Intern Front-end Developer",
        date: "May 2024 - July 2024",
        url: "https://www.planhub.ca/",
    },
]

type ExperienceProps = {
    image: string
    title: string;
    role: string;
    date: string
    url: string;
}

const Experience = (props: ExperienceProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer">
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </div>
    )
}

// Education //
const EDUCATION: EducationProps[] = [
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQFJ2fPiQQwzPQ/company-logo_100_100/0/1630584791614/collegedemaisonneuve_logo?e=1729728000&v=beta&t=hp8IxmuRzPa-PXsG0adwhakNlyWVdqQpfiMnupkBN9U",
        title: "College Maisonneuve",
        city: "Montreal, Canada",
        curriculum : "Website design and programming",
        date: "Feb 2023 - July 2024",
        url: "/",
    },
    
]

type EducationProps = {
    image: string
    title: string;
    city: string;
    curriculum: string;
    date: string
    url: string;
}

const Education = (props: EducationProps) =>{
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 mt-4 rounded cursor-pointer">
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.curriculum}</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </div>
    )
}