import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="coding-profiles">
  <div className="flex min-h-0 flex-col gap-y-3">
    <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
      <h2 className="text-xl font-bold">Coding Profiles</h2>
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 4.8}>
      <ResumeCard
        logoUrl="data:image/png;base64,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" // store this logo in public folder
        altText="LeetCode"
        title="LeetCode"
        subtitle="160+ Problems Solved"
        href="https://leetcode.com/u/rohithsharama6374/" // replace with your profile link
        period="Active"
        description="Solving problems on data structures and algorithms to improve problem-solving skills."
      />
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 5.0}>
      <ResumeCard
        logoUrl="data:image/png;base64,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" // store this logo in public folder
        altText="GeeksforGeeks"
        title="GeeksforGeeks"
        subtitle="320+ Problems Solved"
        href="https://www.geeksforgeeks.org/user/rohithshanwwk/" // replace with your profile link
        period="Active"
        description="Participated in GFG contests and practiced coding problems regularly."
      />
    </BlurFade>
  </div>
</section>


      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certificates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hackathons & Certifications
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love participating in hackathons and coding competitions. I
                  have been fortunate enough to win a few and earn some
                  certifications along the way.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
