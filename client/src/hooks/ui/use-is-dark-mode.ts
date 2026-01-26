import { useEffect, useState } from "react";

const DARK_SCHEME_CONFIG = "(prefers-color-scheme: dark)";

export function useIsDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window === "undefined") return false;

		return window.matchMedia(DARK_SCHEME_CONFIG).matches;
	});

	useEffect(() => {
		const controller = new AbortController();

		window.matchMedia(DARK_SCHEME_CONFIG).addEventListener(
			"change",
			(e) => {
				setIsDarkMode(e.matches);
			},
			{ signal: controller.signal },
		);

		return () => {
			controller.abort();
		};
	}, []);

	return isDarkMode;
}
