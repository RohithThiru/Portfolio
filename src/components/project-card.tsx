"use client";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { FolderGit2Icon } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:bg-white/90 dark:hover:bg-slate-900/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 h-full p-4",
        className
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={href || "#"}
            target={href && href !== "#" ? "_blank" : "_self"}
            className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {title}
          </Link>
          <time className="font-sans text-[11px] text-muted-foreground/80 font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 shrink-0">
            {dates}
          </time>
        </div>
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed">
          {description}
        </Markdown>
      </div>

      <div className="mt-auto pt-3 flex flex-col space-y-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-0"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-1.5 pt-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-slate-900 text-white hover:bg-indigo-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-indigo-400 transition-colors shadow-xs"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}


