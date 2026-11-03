"use client";

import Image from "next/image";

const roles = [
  {
    title: "Co-Founder",
    description:
      "Spearheaded brand direction and creative strategy for Sonder Pictures, overseeing team coordination, project execution, and client management from concept through production.",
  },
  {
    title: "Production Assistant",
    description:
      "Supported on-set operations, equipment prep, and post-production workflows to ensure seamless project execution during video shoots and digital media productions.",
  },
  {
    title: "Social Media Manager",
    description:
      "Managed digital content strategy, audience engagement, and promotional campaigns across social channels, drafting engaging captions and maintaining consistent brand visuals.",
  },
];

const Media = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content (6 columns) */}
        <div className="lg:col-span-6 space-y-8">
          {/* Header & Tagline */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-valorant tracking-wide text-neutral-900 dark:text-white">
              Sonder Pictures
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              An independent film collective built by a group of friends who
              came together through a shared love for filmmaking and storytelling.
            </p>
          </div>

          {/* Roles Breakdown */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Roles & Responsibilities
            </h2>

            <div className="grid gap-4">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md hover:shadow-teal-500/5"
                >
                  <h3 className="font-valorant text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Container (6 columns, slightly taller & balanced) */}
        <div className="lg:col-span-6">
          <div className="relative group w-full h-[400px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
            <Image
              src="/assets/sonder.jpg"
              alt="Sonder Pictures"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Media;