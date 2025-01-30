import { Section } from "./Section"
import Image from 'next/image';
import clsx from 'clsx';
import { Poiret_One } from "next/font/google";

const permanentMarker = Poiret_One({
    subsets: ['latin'], // Personnalisez selon vos besoins
    weight: '400',      // Ajoutez d'autres styles si nécessaire
  });

export const OtherSkills = () => {
    return (
        /* <BlurFade delay={0.25} inView> */
            <Section className="flex flex-col">
            <p className={clsx(permanentMarker.className,'text-xl')}>Technical skills</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">What I master the most</h2>
            <div className="flex flex-col md:flex-row items-center justify-between p-0 gap-4"></div>
                <div className="flex-1 max-w-full md:max-w-[100%] flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-1 w-full max-w-4xl m-auto">
                        <div className="p-4 flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground mb-2">Top skills</p> 
                            <div className="flex flex-wrap gap-2">
                            {TOP_SKILLS.map((tool, index) => (
                                    <TopSkills
                                        key={index}
                                        image={tool.image}
                                        title={tool.title}
                                        description={tool.description}
                                        url="/"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground mb-2">Programming Languages</p>
                            <div className="flex flex-wrap gap-2">
                            {LANGUAGES.map((tool, index) => (
                                        <Languages
                                            key={index}
                                            image={tool.image}
                                            title={tool.title}
                                            description={tool.description}
                                            url="/"
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground mb-2">Databases</p>
                            <div className="flex flex-wrap gap-2">
                            {DATABASES.map((tool, index) => (
                                    <Databases
                                        key={index}
                                        image={tool.image}
                                        title={tool.title}
                                        description={tool.description}
                                        url="/"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground mb-2">Management and Productivity Tools</p>
                            <div className="flex flex-wrap gap-2">
                            {MANAGMENT_TOOLS.map((tool, index) => (
                                    <ManagmentTools
                                        key={index}
                                        image={tool.image}
                                        title={tool.title}
                                        description={tool.description}
                                        url="/"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground mb-2">Design Tools</p>
                            <div className="flex flex-wrap gap-2">
                            {DESIGN_TOOLS.map((tool, index) => (
                                    <DesingTools
                                        key={index}
                                        image={tool.image}
                                        title={tool.title}
                                        description={tool.description}
                                        url="/"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

      /*   </BlurFade> */
        
    )
}


// Managmenttools //
const MANAGMENT_TOOLS: ManagmentToolsProps[] = [
    {
        image: "https://cdn.svgporn.com/logos/jira.svg",
        title: "Jira",
        description: "Project management tool for tracking and managing software development tasks and workflows.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/bitbucket.svg",
        title: "Bitbucket",
        description: "Git repository management tool for collaborative code development and version control.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/docker-icon.svg",
        title: "Docker",
        description: "Platform for developing, shipping, and running applications in containers.",
        url:"/"
    },
    {
        image: "https://www.svgrepo.com/show/439171/github.svg",
        title: "Github",
        description: "Platform for hosting and collaborating on code, using Git for version control and project management.",
        url:"/"
    },
]

type ManagmentToolsProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const ManagmentTools = (props: ManagmentToolsProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 p-2 rounded-md">
            
            <Image src={props.image} alt={props.title} className="w-6 h-6 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-xs text-muted-foreground">{props.title}</h4>
            </div>
        </div>
    )
}


// Design tools //
const DESIGN_TOOLS: DesignToolsProps[] = [
    {
        image: "https://cdn.svgporn.com/logos/figma.svg",
        title: "Figma",
        description: "Cloud-based UI design tool with real-time collaboration features.",
        url:"/"
    },
]

type DesignToolsProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const DesingTools = (props: DesignToolsProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 p-2">
            
            <Image src={props.image} alt={props.title} className="w-6 h-6 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-xs text-muted-foreground">{props.title}</h4>
            </div>
        </div>
    )
}


// Top Skills //
const TOP_SKILLS: TopSkillsProps[] = [
    {
        image: "https://cdn.svgporn.com/logos/react.svg",
        title: "React",
        description: "JavaScript library for building dynamic and responsive user interfaces.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/laravel.svg",
        title: "Laravel",
        description: "PHP framework for crafting elegant and scalable web applications.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
        title: "Next.js",
        description: "React framework for optimized server-side rendering and static site generation.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/git-icon.svg",
        title: "Git",
        description: "Version control system for managing code changes and facilitating team collaboration.",
        url:"/"
    },
]

type TopSkillsProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const TopSkills = (props: TopSkillsProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 p-2">
            
            <Image src={props.image} alt={props.title} className="w-6 h-6 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-xs text-muted-foreground">{props.title}</h4>
            </div>
        </div>
    )
}


// Databases //
const DATABASES: DatabasesProps[] = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png",
        title: "MySql",
        description: "MySQL is an open-source relational database management system.",
        url:"/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
        title: "Postgresql",
        description: "elational database known for its stability, scalability, and advanced features.",
        url:"/"
    },
    {
        image: "https://www.svgrepo.com/show/353735/firebase.svg",
        title: "Firebase",
        description: "Firebase offers real-time, cloud databases for apps.",
        url:"/"
    },
    {
        image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        title: "MongoDB",
        description: "Database that stores data in flexible, JSON-like documents for scalability.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/supabase-icon.svg",
        title: "Supabase",
        description: "An open-source backend platform with PostgreSQL, real-time data, authentication, and storage.",
        url:"/"
    }
]

type DatabasesProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const Databases = (props: DatabasesProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 p-2">
            
            <Image src={props.image} alt={props.title} className="w-6 h-6 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-xs text-muted-foreground">{props.title}</h4>
            </div>
        </div>
    )
}

//Languages //
const LANGUAGES: LanguagesProps[] = [
    {
        image: "https://cdn.svgporn.com/logos/java.svg",
        title: "Java",
        description: "JavaScript adds interactivity to web pages.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/javascript.svg",
        title: "JavaScript",
        description: "JavaScript adds interactivity to web pages.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/typescript-icon.svg",
        title: "TypeScript",
        description: "TypeScript is a superset of JavaScript that adds static types.",
        url:"/"
    },
    {
        image: "https://cdn.svgporn.com/logos/php.svg",
        title: "PHP",
        description: "PHP is a server-side scripting language designed for web development.",
        url:"/"
    },
]

type LanguagesProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const Languages = (props: LanguagesProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 p-2">
            
            <Image src={props.image} alt={props.title} className="w-6 h-6 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-xs text-muted-foreground">{props.title}</h4>
            </div>
        </div>
    )
}