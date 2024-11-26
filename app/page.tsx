import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { Contact } from "./components/Contact";
import { OtherSkills } from "./components/OtherSkills";
import { Footer } from "./components/Footer";
import { BlurFadeDemo } from "./components/Catalogue";
import { DockDemo } from "./components/Doke";
import { ScrollBasedVelocityDemo } from "./components/ScrollText";
import { AfterHero } from "./components/AfterHero";

export default function Home() {
  return (
    <main>

      <DockDemo></DockDemo>
      
      <Header></Header>

      <Spacing size="md"/>
      
      <Hero></Hero>

      <Spacing size="md"/>

      <Status></Status>

      <Spacing size="md"/>

      <OtherSkills></OtherSkills>

      <Spacing size="md"/>

      <ScrollBasedVelocityDemo/>

      <Spacing size="lg"/>

      <AfterHero/>

      <Spacing size="md"/>

      <BlurFadeDemo></BlurFadeDemo>

      <Spacing size="md"/>

      <Contact></Contact>

      <Spacing size="md"/>

      <Footer></Footer>

    </main>
  );
}
