import { useState } from "react";

export function Task21_4() {
	let [checked, setChecked] = useState(false);


	return <>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>
		<p className={checked ? "" : "_hide"}></p>
	</>
}