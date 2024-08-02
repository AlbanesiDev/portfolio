import { useState, useEffect } from "react";

export const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		const mobile = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop|phone|tablet/.test(
			userAgent,
		);
		setIsMobile(mobile);
	}, []);

	return isMobile;
};
