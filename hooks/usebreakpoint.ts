import { useEffect, useState } from "react";

export const sizes = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536,
};

interface BreakPointsType<T> {
	base: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
	xxl?: T;
}

// hook to calculate the current value of variable based on the current window width
const useBreakPoint = (breakpoints: BreakPointsType<string | number | boolean>) => {
	const [value, setValue] = useState(breakpoints.base);

	useEffect(() => {
		const { base, sm, md, lg, xl, xxl } = breakpoints;
		const handleResizeWindow = () => {
			if (window.innerWidth >= sizes.xxl && xxl !== undefined) {
				setValue(xxl);
			} else if (window.innerWidth >= sizes.xl && xl !== undefined) {
				setValue(xl);
			} else if (window.innerWidth >= sizes.lg && lg !== undefined) {
				setValue(lg);
			} else if (window.innerWidth >= sizes.md && md !== undefined) {
				setValue(md);
			} else if (window.innerWidth >= sizes.sm && sm !== undefined) {
				setValue(sm);
			} else {
				setValue(base);
			}
		};
		handleResizeWindow();
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, [breakpoints]);

	return value;
};

export default useBreakPoint;
