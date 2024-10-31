import { Section } from "./Section"
import { IconCloudDemo } from "./IconCloud"
import { OrbitingCirclesDemo } from "./OrbitCircle"

export const  AfterHero= ()=> {
    return <Section>
        <div className="flex flex-col md:flex-row gap-2 w-full items-center">
            <div className="w-[50%]">
                <IconCloudDemo/>
            </div>
            <div className="w-[50%]">
                <OrbitingCirclesDemo/>
            </div>
        </div>
    </Section>
}