"use client";

import { useEffect, useState } from "react";

export default function ErrorDemo() {
	const [shouldError, setShouldError] = useState(false);

	useEffect(() => {
		setShouldError(true);
	}, []);

	if (shouldError) {
		throw new Error("This is a demo runtime error.");
	}

	return <div>Triggering error...</div>;
}
