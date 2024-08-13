import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LInkedInIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="border-b border-secondary p-4">
            <Section className="flex justify-between">
                <h1 className="text-2xl text-primary font-bold">kamelchx</h1>
                <div className="flex items-center">
                    <ul className="flex items-center gap-2">
                        <Link href="https://github.com/kvmelxv" className="size-6 p-0">
                            <GithubIcon size={18} className="text-foreground"/>
                        </Link>

                        <Link href="https://linkedin.com/in/musmustapha-kamel-chérif" className="size-6 p-0">
                            <LinkedInIcon size={18} className="text-foreground"/>
                        </Link>

                        <Link href="https://x.com/kamelxch" className="size-6 p-0">
                            <InstagramIcon size={18} className="text-foreground"/>
                        </Link>
                    </ul>
                </div>
            </Section>
        </header>
    )
}; 