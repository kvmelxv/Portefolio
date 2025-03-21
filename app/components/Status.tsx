import { Section } from "./Section";
import Image from 'next/image';
import clsx from 'clsx';
import { Poiret_One } from "next/font/google";
import { Spacing } from "./Spacing";

const permanentMarker = Poiret_One({
    subsets: ['latin'], // Personnalisez selon vos besoins
    weight: '400',      // Ajoutez d'autres styles si nécessaire
  });
  

export const Status = () => {
    return (
            <Section className="flex flex-col">
                <p className={clsx(permanentMarker.className,'text-xl')}>About me</p>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10'>Experiences and Education</h2>
                <div className="flex max-md:flex-col itemsflex-start pt-0 gap-5 h-full">
                   <div className="flex flex flex-col gap-4 w-full max-w-4xl m-auto">
                        <div className="p-4 flex-1">
                            <p className="text-xs text-muted-foreground mb-4">Education</p>
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
                        </div>
                        <div className="p-4 flex-1">
                            <p className="text-xs text-muted-foreground mb-4">Experiences</p>
                            <div className="flex flex-col gap-4">
                                {EXPERIENCES.map((work, index) => ( 
                                    <Experience
                                    key={index}
                                    image={work.image}
                                    title={work.title}
                                    role={work.role}
                                    date={work.date}
                                    url={work.url}
                                    tags={work.tags}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div> 
            </Section>
    )
};

// Experience //
const EXPERIENCES: ExperienceProps[] = [
    {
        image: "https://pbs.twimg.com/profile_images/751081116539424768/NBqZeo8c_400x400.jpg",
        title: " Planhub mobile & internet - Canada ",
        role: "Intern Front-end Developer",
        date: "May 2024 - July 2024",
        url: "https://www.planhub.ca/",
        tags: ["php", "symfony", "javascript", "react", "docker", "git", "jira", "méthodologie agile (Scrum)" ],
    },
]

type ExperienceProps = {
    image: string
    title: string;
    role: string;
    date: string
    url: string;
    tags: string[],
}

const Experience = (props: ExperienceProps) => {
    return (
        <div className="inline-flex items-start gap-2 md:gap-4 p-1 rounded flex-wrap md:flex-nowrap">
            <Image
                src={props.image}
                alt={props.title}
                className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-md"
                width={100}
                height={100}
            />
            <div className="flex-1 min-w-[150px]">
                <p className="text-xs md:text-sm font-semibold">{props.title}</p>
                <p className="text-[12px] md:text-[13px] text-muted-foreground mb-2 md:mb-3">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-muted-foreground">{props.date}</p>
            </div>
        </div>
    );
};


// Education //
const EDUCATION: EducationProps[] = [
    {
        image: "https://ressources-medias.uqam.ca/media/uploads/20200306145948/uqambleu.jpg",
        title: "Bachelor’s degree - Computer Science & Software Engineering",
        city: "Montreal, Canada",
        curriculum : "UQAM | Université du Québec à Montréal",
        date: "In Progress",
        url: "/",
    },
    {
        image: "https://www.cmaisonneuve.qc.ca/wp-content/uploads/2021/05/cropped-favicon-cm.png",
        title: "Website Design and Programming",
        city: "Montreal, Canada",
        curriculum : "College Maisonneuve",
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
        <div className="inline-flex items-center gap-2 md:gap-4 p-1 rounded flex-wrap md:flex-nowrap">
            <Image 
                src={props.image} 
                alt={props.title} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-md" 
                width={100} 
                height={100}
            />
            <div className="flex-1 min-w-[150px]">
                <p className="text-xs md:text-sm font-semibold">{props.title}</p>
                <p className="text-[12px] md:text-[13px] text-muted-foreground">{props.curriculum}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-muted-foreground">{props.date}</p>
            </div>
        </div>
    )
}