import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="border-t border-secondary p-4 md:p-8">
            <Section className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl md:text-2xl text-primary font-bold">kamelchx</h1>
                <div className="mt-4 md:mt-0 flex items-center">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Designed & Developed by me 😜
                    </p>
                </div>
            </Section>
        </footer>
    
    )
}; 