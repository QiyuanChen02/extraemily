import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width: number) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e: { matches: boolean }) => {
		setTargetReached(e.matches);
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addEventListener("change", (e) => updateTarget(e));

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeEventListener("change", (e) => updateTarget(e));
	}, [updateTarget, width]);

	return targetReached;
};

export default useMediaQuery;
