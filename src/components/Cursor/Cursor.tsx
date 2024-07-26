import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

const Cursor: React.FC = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const [iconCursor, setIconCursor] = useState<string | null>(null);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.top = `${event.clientY}px`;
				cursorRef.current.style.left = `${event.clientX}px`;
			}
		};

		const handleMouseOver = (event: MouseEvent) => {
			let targetElement = event.target as HTMLElement;

			while (targetElement && targetElement !== document.body) {
				if (targetElement.classList.contains("scale__cursor")) {
					cursorRef.current!.style.transform = "translate(-50%, -50%) scale(3)";
					setIconCursor(null);
					return;
				} else if (targetElement.classList.contains("link__cursor")) {
					cursorRef.current!.style.transform = "translate(-50%, -50%) scale(3)";
					setIconCursor("arrow_link");
					return;
				} else if (targetElement.classList.contains("gallery__cursor")) {
					cursorRef.current!.style.transform = "translate(-50%, -50%) scale(3)";
					setIconCursor("arrow_link_gallery");
					return;
				} else if (targetElement.classList.contains("send__cursor")) {
					cursorRef.current!.style.transform = "translate(-50%, -50%) scale(3)";
					setIconCursor("send");
					return;
				} else if (targetElement.classList.contains("nav__cursor")) {
					cursorRef.current!.style.transform = "translate(-50%, -50%) scale(3)";
					setIconCursor("arrow_left");
					return;
				}
				targetElement = targetElement.parentElement as HTMLElement;
			}
			// Reset cursor if no relevant class is found
			cursorRef.current!.style.transform = "translate(-50%, -50%) scale(1)";
			setIconCursor(null);
		};

		const handleMouseOut = (event: MouseEvent) => {
			const relatedTarget = event.relatedTarget as HTMLElement;
			if (
				relatedTarget &&
				!relatedTarget.closest(".scale__cursor, .link__cursor, .send__cursor, .nav__cursor")
			) {
				cursorRef.current!.style.transform = "translate(-50%, -50%) scale(1)";
				setIconCursor(null);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseover", handleMouseOver);
		document.addEventListener("mouseout", handleMouseOut);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseover", handleMouseOver);
			document.removeEventListener("mouseout", handleMouseOut);
		};
	}, []);

	return (
		<div ref={cursorRef} className="cursor">
			<div className="cursor__inner">
				{iconCursor !== null ? (
					<img src={`/src/assets/icons/${iconCursor}.svg`} alt={iconCursor} />
				) : null}
				<div className="cursor__label">
					{iconCursor === "arrow_link_gallery" ? "Ir a la galería" : null}
				</div>
			</div>
		</div>
	);
};

export { Cursor };
