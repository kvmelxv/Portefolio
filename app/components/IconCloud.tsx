import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "php",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "mysql",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "bitbucket",
  "figma",
  "laravel",
  "symfony",
  "oracle",
  "c#",
  "mongodb",
  "supabase"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-[450px] w-full max-w-[29rem] items-center justify-center overflow-hidden px-10 pb-20 pt-8 m-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
