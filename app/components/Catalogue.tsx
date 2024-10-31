import { Section } from "./Section";

// Liste des chemins relatifs aux vidéos dans le dossier `public`
const videos = [
  "/juice.mp4",
  "/filmfinder.mp4",
  "/burger.mp4",
  "/simbud.mp4",
];

export function BlurFadeDemo() {
  return (
    <Section>
      <p className="text-xl text-muted-foreground">Works</p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-10">Showcase of My Recent Projects</h2>
      <section id="videos">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
          {videos.map((videoUrl, idx) => (
            /* <BlurFade key={videoUrl} delay={0.25 + idx * 0.05} inView> */
              <video
                key={idx}
                className="mb-4 size-full rounded-lg object-cover"
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                controls={false}  // Remove controls if you don't want them
                style={{ width: '100%', height: 'auto' }}  // Adjust width and height as needed */
              >
                Your browser does not support the video tag.
              </video>
           /*  </BlurFade> */
          ))}
        </div>
      </section>
    </Section>
  );
}
