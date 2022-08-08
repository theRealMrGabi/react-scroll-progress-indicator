import * as React from "react";

interface ScrollProgressType extends React.HtmlHTMLAttributes<HTMLDivElement> {
	color?: string;
	height?: string | number;
}

export const ScrollProgress: React.FC<ScrollProgressType> = ({
	color,
	height,
	style,
	...rest
}) => {
	const [width, setWidth] = React.useState("0");

	const observeScrolling = () => {
		const { scrollHeight, scrollTop, clientHeight } =
			globalThis?.window.document.documentElement;
		const scrollPosition =
			globalThis?.window.document.body.scrollTop || scrollTop;
		const windowHeight = scrollHeight - clientHeight;
		const scrolledView = `${(scrollPosition / windowHeight) * 100}%`;

		if (windowHeight > 0) {
			return setWidth(scrolledView);
		} else {
			return setWidth("0");
		}
	};

	React.useEffect(() => {
		window.addEventListener("scroll", observeScrolling);
		return () => {
			window.removeEventListener("scroll", observeScrolling);
		};
	}, [height]);

	const progressStyle: React.CSSProperties = {
		marginTop: 0,
		padding: 0,
		background: color ? color : "skyblue",
		position: "fixed",
		height: height ? height : 4,
		width: width,
		top: 0,
		zIndex: 99,
		transition: "width 200ms ease-out",
	};

	return <div style={progressStyle} {...rest} />;
};
