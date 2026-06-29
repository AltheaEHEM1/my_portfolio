import ExperienceData from "../../data/experience.json";

const Experience = () => {
	return (
		<div className="w-full py-8 space-y-6">
			{ExperienceData.map((exp) => (
				<div
					key={exp.id}
					className="relative flex justify-center lg:justify-end lg:pr-8 group"
				>
					{/* The Dot */}

					<div className="absolute -right-2 top-6 hidden lg:block w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 z-10" />

					<div className="relative w-full max-w-lg border border-black/20 dark:border-border rounded-xl p-5 bg-transparent font-mono transition-all duration-300 hover:border-teal/50 hover:shadow-xl">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
							<h3 className="text-base font-bold text-foreground uppercase tracking-wide">
								{exp.role}
							</h3>

							<span className="mt-2 sm:mt-0 text-[11px] font-bold bg-teal/10 text-teal px-4 py-1 rounded-full whitespace-nowrap border border-teal/20">
								{exp.period}
							</span>
						</div>

						<p className="text-sm font-semibold text-muted-foreground">
							{exp.company}
						</p>

						<p className="text-xs text-slate-500 italic">📍 {exp.location}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Experience;
