import React, { useState } from "react";

export function Task17_3() {
	let [inCart, setInCart] = useState(false);

	return <>
		<span>{inCart ? "in Cart" : "not in Cart"}</span><br />
		<button onClick={() => setInCart(!inCart)}>{inCart ? "remove" : "add"}</button>
	</>
}