import React, { useState } from "react";

export const ButtonComp = () => {
	const [value, setValue] = useState(0);
	return (
		<div>
			<div style={{ background: "red", color: "white", paddingBottom: "1rem" }}>
				Count Value : {value}
			</div>
			<button
				style={{ background: "red", color: "white" }}
				onClick={() => setValue((item) => item + 1)}
			>
				Click Me
			</button>
		</div>
	);
};
