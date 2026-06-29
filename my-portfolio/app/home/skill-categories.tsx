import React from 'react';
// Adjusted path to step out of 'home' and 'app' folders
import SkillCategoriesData from '../../data/skill-categories.json';

// Define the interface matching your JSON structure
interface SkillCategory {
  category: string;
  items: string[];
}

const SkillCategories = () => {
  // Cast the imported JSON data to our type to make TypeScript happy
  const data = SkillCategoriesData as SkillCategory[];

  return (
    <div className="w-full mx-auto py-2 px-10 selection:bg-teal-500/30">
      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-slate-200/60 dark:border-slate-800 pl-8 ml-3 space-y-5">
        {data.map((item: SkillCategory, index: number) => (
          <div key={index} className="relative group">
            
            {/* Timeline Node / Indicator */}
            <div className="absolute -left-[41px] flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 group-hover:bg-teal-500 transition-all duration-300 ring-4 ring-transparent group-hover:ring-teal-500/20 shadow-sm" />
            </div>
            
            {/* Content Content Container */}
            <div className="space-y-2 transform transition-all duration-300 group-hover:translate-x-1">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-pale-600 group-hover:text-teal-500 transition-colors duration-200">
                {item.category}
              </h5>
              
             {/* Badges Flex Grid */}
            <div className="flex flex-wrap gap-2 pl-3">
            {item.items.map((skill: string, skillIndex: number) => (
                <span 
                key={skillIndex} 
                className="text-[11px] font-lg tracking-wide px-3 py-1 rounded-lg
                            bg-slate-50 dark:bg-slate-900/40 
                            text-slate-600 dark:text-slate-400 
                            border border-slate-200/70 dark:border-slate-800/80
                            hover:border-teal-500/40 dark:hover:border-teal-400/30 
                            hover:text-teal-600 dark:hover:text-teal-400
                            hover:bg-teal-50/30 dark:hover:bg-teal-950/10
                            hover:-translate-y-0.5
                            transition-all duration-200 ease-in-out cursor-default"
                >
                {skill}
                </span>
            ))}
            </div>
              
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategories;