"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  location?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  location,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {

  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      onClick={handleClick}
    >
      <Card className="flex items-center p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:bg-white/90 dark:hover:bg-slate-900/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300">
        <div className="flex-none">
          <Avatar className="size-11 sm:size-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm group-hover:border-indigo-500/40 transition-colors">

            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback className="font-bold text-slate-700 dark:text-slate-200">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-3 sm:ml-4 flex flex-col justify-center min-w-0">
          <CardHeader className="p-0 space-y-1">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[10px] px-1.5 py-0 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 transform opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:text-indigo-500",
                      isExpanded ? "rotate-90 text-indigo-500" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-[11px] sm:text-xs tabular-nums font-medium text-muted-foreground/80 shrink-0 text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground leading-snug flex items-center justify-between gap-1">
                <span>{subtitle}</span>
                {location && <span className="text-[11px] text-muted-foreground/70">{location}</span>}
              </div>
            )}

          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs text-muted-foreground leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/60"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};

