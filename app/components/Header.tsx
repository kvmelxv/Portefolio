import { Section } from "./Section";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ScrollProgress from "@/components/ui/scroll-progress";
import ThemeSwitch from "./ThemeSwitch";
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="border-b border-secondary p-4 fixed top-0 left-0 w-full z-10 bg-white shadow-sm">
            <Section className="flex justify-between">
                <h1 className="text-2xl text-primary font-bold">kamelchx</h1>
                <div className="flex items-center">
                    <ul className="flex items-center gap-2">
                        <Link href="https://github.com/kvmelxv" className="size-6 p-0">
                            <FaGithub size={18} className="text-foreground"/>
                        </Link>

                        <Link href="https://linkedin.com/in/musmustapha-kamel-chérif" className="size-6 p-0">
                            <FaLinkedin size={18} className="text-foreground"/>
                        </Link>

                        <Link href="https://x.com/kamelxch" className="size-6 p-0">
                            <FaInstagram size={18} className="text-foreground"/>
                        </Link>
                    </ul>
                </div>
            </Section>

            {/* Scroll Progress below the header */}
            <ScrollProgress className="fixed top-[64px] left-0 w-full z-20 bg-white shadow-sm" />
        </header>
    )
}; 