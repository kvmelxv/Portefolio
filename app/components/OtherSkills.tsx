import { Section } from "./Section"
import { IconCloudDemo } from "./IconCloud"
import { AnimatedBeamDemo } from "./AnimatedBeam"
/* import BlurFade from "@/components/magicui/blur-fade"; */
import { Card } from "@/components/ui/card";
import Image from 'next/image';

export const OtherSkills = () => {
    return (
        /* <BlurFade delay={0.25} inView> */
            <Section className="flex flex-col">
            <p className="text-xl text-muted-foreground">Technical skills</p>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">What I master the most</h2>
            <div className="flex flex-col md:flex-row items-center justify-between p-0 gap-4"></div>
                <div className="flex-1 max-w-full md:max-w-[100%] flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                        <Card className="p-0 flex-[1] shadow-md rounded-xl">
                            <IconCloudDemo></IconCloudDemo>
                        </Card>
                        <Card className="p-4 flex-[2] border border-md shadow-md rounded-xl">
                            <p className="text-sm text-muted-foreground mb-2">My top skills are ...</p>
                            {TOP_SKILLS.map((tool, index) => (
                                    <DesingTools
                                        key={index}
                                        image={tool.image}
                                        title={tool.title}
                                        description={tool.description}
                                        url="/"
                                    />
                                ))}
                        </Card> 
                    </div>
                    <Card className="flex flex-col md:flex-row gap-2 w-full">
                        <div className="p-0 flex-[2] shadow-md rounded-xl">
                            <AnimatedBeamDemo></AnimatedBeamDemo>
                        </div>
                    </Card>
                    <div className="flex flex-col md:flex-row gap-2 w-full">
                        <div className="flex flex-col">
                            <Card className="p-4 flex-[1] shadow-md rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">Databases</p>
                                <div className="flex flex-col gap-1">
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
                            </Card>
                            <Card className="p-4 flex-[1] shadow-md rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">Design Tools</p>
                                <div className="flex flex-col gap-1">
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
                            </Card>
                        </div>
                        <Card className="p-4 flex-[1] shadow-md rounded-xl">
                            <p className="text-sm text-muted-foreground mb-2">Management and Productivity Tools</p>
                            <div className="flex flex-col gap-1">
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
                        </Card>
                    </div>
                </div>
            {/* <div className="flex-1 max-w-full md:max-w-[30%] w-full">
                <IconCloudDemo></IconCloudDemo>
            </div> */}
        </Section>

      /*   </BlurFade> */
        
    )
}


// Managmenttools //
const MANAGMENT_TOOLS: ManagmentToolsProps[] = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/2560px-ZOHO.svg.png",
        title: "Zoho",
        description: "Cloud-based suite for business applications, including CRM, project management, and more.",
        url:"/"
    },
    {
        image: "https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png",
        title: "Jira",
        description: "Project management tool for tracking and managing software development tasks and workflows.",
        url:"/"
    },
    {
        image: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg",
        title: "Bitbucket",
        description: "Git repository management tool for collaborative code development and version control.",
        url:"/"
    },
    {
        image: "https://static-00.iconduck.com/assets.00/docker-icon-1024x739-rivf80b4.png",
        title: "Docker",
        description: "Platform for developing, shipping, and running applications in containers.",
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
        <div /* href={props.url} */ className="w-full inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-md cursor-pointer">
            
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-md font-semibold tracking-tight">{props.title}</h4>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    )
}


// Design tools //
const DESIGN_TOOLS: DesignToolsProps[] = [
    {
        image: "https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png",
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
        <div /* href={props.url} */ className="w-full inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-md cursor-pointer">
            
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-md font-semibold tracking-tight">{props.title}</h4>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    )
}


// Top Skills //
const TOP_SKILLS: TopSkillsProps[] = [
    {
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        title: "React",
        description: "JavaScript library for building dynamic and responsive user interfaces.",
        url:"/"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
        title: "Laravel",
        description: "PHP framework for crafting elegant and scalable web applications.",
        url:"/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        title: "Typescript",
        description: "JavaScript superset that enhances development with static types and better tooling.",
        url:"/"
    },
    {
        image: "https://exafunction.github.io/public/icons/nextjs.png",
        title: "Next.js",
        description: "React framework for optimized server-side rendering and static site generation.",
        url:"/"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
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
        <div /* href={props.url} */ className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-md cursor-pointer">
            
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-md font-semibold tracking-tight">{props.title}</h4>
                <p className="text-sm text-muted-foreground">{props.description}</p>
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
        image: "https://www.svgrepo.com/show/353735/firebase.svg",
        title: "Firebase",
        description: "Firebase offers real-time, cloud databases for apps.",
        url:"/"
    },
]

type DatabasesProps = {
    image: string;
    title: string;
    description: string;
    url: string;
}

const Databases = (props: DatabasesProps) =>{
    return (
        <div /* href={props.url} */ className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-md cursor-pointer">
            
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={100} height={100}/>
            
            <div>
                <h4 className="scroll-m-20 text-md font-semibold tracking-tight">{props.title}</h4>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    )
}