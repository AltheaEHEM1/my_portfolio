const education = [
	{
		school: "Polytechnic University of the Philippines",
		degree: "Bachelor of Science in Information Technology",
		period: "2022 – Present",
		location: "Quezon City, Philippines",
	},
	{
		school: "Holy Spirit National High School",
		degree: "Junior High School and Senior High School",
		period: "2016 – 2022",
		location: "Quezon City, Philippines",
	},
	{
		school: "A.S.L.E. Learning School of Quezon City",
		degree: "Elementary Education",
		period: "2016",
		location: "Quezon City, Philippines",
	},
];

const Education = () => {
	return (
		<div className="w-full py-8 space-y-6">
			{education.map((edu) => (
				<div
					key={edu.school}
					className="relative flex justify-center lg:justify-start lg:pl-8 group"
				>
					{/* The Dot */}
					<div className="absolute -left-2 top-6 hidden lg:block w-4 h-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 z-10" />

					<div className="relative w-full max-w-lg border border-black/20 dark:border-border rounded-xl p-5 bg-transparent font-mono transition-all duration-300 hover:border-teal/50 hover:shadow-xl">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
							<h3 className="text-base font-bold text-foreground uppercase tracking-wide">
								{edu.school}
							</h3>
							<span className="mt-2 sm:mt-0 text-[11px] font-bold bg-teal/10 text-teal px-4 py-1 rounded-full whitespace-nowrap border border-teal/20">
								{edu.period}
							</span>
						</div>
						<p className="text-sm font-semibold text-muted-foreground">
							{edu.degree}
						</p>
						<p className="text-xs text-slate-500 italic">📍 {edu.location}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
