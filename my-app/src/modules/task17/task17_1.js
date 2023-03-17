import React, { useState } from "react";

export function Task17_1() {
	const [name, setName] = useState("name");

	// const clickHandler = () => setName("xxx");

	return <>
		<span>{name}</span>
		{/* <button onClick={clickHandler}>change name</button> */}
		<button onClick={() => setName("www")}>change name</button>
	</>
}