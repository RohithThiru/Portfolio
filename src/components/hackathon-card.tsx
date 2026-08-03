"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4 group">
      <div className="absolute -left-[60px] top-3.5 flex items-center justify-center rounded-full bg-background p-0.5">
        <Avatar className="size-11 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm group-hover:border-indigo-500/50 transition-colors">
          <AvatarImage src={image} alt={title} className="object-contain p-1" />
          <AvatarFallback className="font-bold text-slate-700 dark:text-slate-200">
            {title[0]}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1 p-3.5 rounded-xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800/60 group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/40 group-hover:bg-white/70 dark:group-hover:bg-slate-900/70 transition-all duration-300">

        {dates && (
          <time className="text-[11px] font-medium text-muted-foreground/80">
            {dates}
          </time>
        )}
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        {location && (
          <p className="text-xs text-muted-foreground font-medium">
            {location}
          </p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-xs text-muted-foreground leading-relaxed mt-1">
            {description}
          </span>
        )}
        {links && links.length > 0 && (
          <div className="mt-2.5 flex flex-row flex-wrap items-start gap-1.5">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  title={link.title}
                  className="flex gap-1.5 px-2.5 py-1 text-[11px] font-medium bg-slate-900 text-white hover:bg-indigo-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-indigo-400 transition-colors"
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

