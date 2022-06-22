import { useEffect, useState } from "react";

export const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536,
};

interface useBreakPointProps<T> {
	base: T;
	sm?: T;
	md?: T;
	lg?: T;
	xl?: T;
	xxl?: T;
}

// hook to calculate the current value of variable based on the current window width
const useBreakPoint = (props: useBreakPointProps<string | number | boolean>) => {
	const [value, setValue] = useState(props.base);

	useEffect(() => {
		const { base, sm, md, lg, xl, xxl } = props;
		const handleResizeWindow = () => {
			if (window.innerWidth >= breakpoints.xxl && xxl !== undefined) {
				setValue(xxl);
			} else if (window.innerWidth >= breakpoints.xl && xl !== undefined) {
				setValue(xl);
			} else if (window.innerWidth >= breakpoints.lg && lg !== undefined) {
				setValue(lg);
			} else if (window.innerWidth >= breakpoints.md && md !== undefined) {
				setValue(md);
			} else if (window.innerWidth >= breakpoints.sm && sm !== undefined) {
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
	}, [props]);

	return value;
};

export default useBreakPoint;
