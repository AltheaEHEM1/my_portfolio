import * as SolidIcons from "@heroicons/react/24/solid";

interface Feature {
	name?: string;
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
	// Helper to safely get icon
	const getIcon = (iconName: string) => {
		const Icon = (SolidIcons as Record<string, React.ElementType>)[iconName];
		return Icon || SolidIcons.CheckCircleIcon;
	};

	if (!features || features.length === 0) {
		return (
			<div className="grid w-full gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
				{SKELETON_KEYS.map((key) => (
					<div key={key} className="flex items-start gap-4">
						<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal-500/30 text-teal-600">
							<span className="animate-pulse bg-gray-200 h-4 w-4 rounded-full" />
						</div>
						<div className="min-w-0 flex-1">
							<div className="h-4 w-40 rounded-full bg-gray-200 animate-pulse mb-2" />
							<div className="h-3 w-full rounded-full bg-gray-100 animate-pulse" />
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div
			className={`grid w-full gap-x-5 gap-y-4 ${
				features.length > 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
			}`}
		>
			{features.map((feature) => {
				const IconComponent = getIcon(feature.icon);
				return (
					<div key={feature.name} className="flex items-start gap-2">
						<div className="shrink-0 font-mono mt-0.5">
							<IconComponent className="w-5 h-5 text-black" />
						</div>
						<div className="flex flex-col">
							{feature.name && (
								<h3 className="text-black font-bold text-[15px] leading-tight">
									{feature.name}
								</h3>
							)}
							<p className="text-gray-700 text-[14px] leading-relaxed">
								{feature.description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
