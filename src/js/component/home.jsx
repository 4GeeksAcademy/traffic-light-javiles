import React, { useState } from "react";

export function Home () {
	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<div className="container border d-flex justify-content-center">
			
			<div className="traffic-light mt-3">
				<div onClick={() => setSelectedColor("red")} className={"light red"+((selectedColor === "red")?" glow":"")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"light yellow"+((selectedColor === "yellow")?" glow":"")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green"+((selectedColor === "green")?" glow":"")}></div>
			</div>
		</div>
	);
}
1