'use client';

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react"; 
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const transition = {duration:1, ease: 'easeInOut'};

const variantsy = {
    hidden: {opacity:0, y:-25},
    visible: {opacity:1, y:0, transition},
    exit: {opacity:0, y:25, transition}
}

export const Section = (props: PropsWithChildren<{className?:string}>) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return <motion.section key='section' ref={ref} initial= 'hidden' animate={isInView ? 'visible' : 'hidden'}  exit= 'exit' variants={variantsy} className={cn("max-w-5xl px-4 m-auto", props.className)}>{props.children}</motion.section>
}; 