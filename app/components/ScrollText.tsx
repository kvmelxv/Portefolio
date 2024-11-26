import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Section } from "./Section";

export function ScrollBasedVelocityDemo() {
  return (
    <Section className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg p-0">
        <VelocityScroll
            text="Technological Skills"
            default_velocity={3}
            className="font-display text-center text-4xl font-semibold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-6xl md:leading-[4.5rem]"            
         />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </Section>
  );
}
