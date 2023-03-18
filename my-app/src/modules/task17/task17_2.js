import React, { useState } from "react";

export function Task17_2() {
	let [name, setName] = useState("prod");
	let [coast, setCoast] = useState("1000");

	return <>
		<span>{name}</span><br />
		<span>{coast}</span><br />

		<button onClick={() => setName("food")}>change name</button><br />
		<button onClick={() => setCoast("2000")}>change coast</button>
	</>
}