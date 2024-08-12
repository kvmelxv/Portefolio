import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LInkedInIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

export const Footer = () => {
    return (
        <footer className="border-t border-secondary p-8">
            <Section className="flex justify-between">
                <h1 className="text-2xl text-primary font-bold">kamelchx.ca</h1>
                <div className="flex items-center">
                    <p className="text-sm text-muted-foreground">Designed & Developed by me 😜</p>
                </div>
            </Section>
        </footer>
    )
}; 