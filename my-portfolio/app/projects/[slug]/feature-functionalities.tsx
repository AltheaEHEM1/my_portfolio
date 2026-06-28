import * as SolidIcons from "@heroicons/react/24/solid";

interface Feature {
	name: string;
	description: string;
	icon: string;
}

interface FeaturesProps {
	features: Feature[];
}

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4"];

export default function FeaturesAndFunctionalities({
	features,
}: FeaturesProps) {
	if (!features || features.length === 0) {
		return (
			<div className="grid w-full gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
				{SKELETON_KEYS.map((key) => (
					<div key={key} className="flex items-start gap-4">
						<div
							className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
							style={{
								border: "1.5px solid var(--border-teal)",
								color: "var(--text-title2)",
							}}
						>
							<svg
								className="h-4 w-4 opacity-50"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<title>Loading icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div className="min-w-0 flex-1">
							<div className="h-3 w-40 rounded-full placeholder-shimmer mb-2" />
							<div className="h-2.5 w-full rounded-full placeholder-shimmer opacity-50 mb-1" />
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div
			className={`grid w-full gap-x-8 gap-y-8 ${
				features.length > 6
					? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2"
					: "grid-cols-1"
			}`}
		>
			{features.map((feature) => {
				// Type safety for dynamic icon access
				const IconComponent =
					(SolidIcons as Record<string, React.ElementType>)[feature.icon] ||
					SolidIcons.CheckCircleIcon;

				return (
					<div key={feature.name} className="flex items-start gap-5">
						<div className="shrink-0 mt-0.5">
							<IconComponent className="w-8 h-8 text-white" />
						</div>
						<div className="flex flex-col">
							<h3 className="text-white font-bold text-[17px] tracking-wide mb-1 leading-tight">
								{feature.name}
							</h3>
							<p className="text-[#D1D5DB] text-[14px] leading-relaxed pt-1">
								{feature.description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
