import { useState } from "react";

export function Task21_3() {
	let [checked, setChecked] = useState(false);

	let messgeAdults = <div>
		<h2>Ok, you have 18 years old</h2>
		<p>This content is only for adults</p>
	</div>

	let messageMinors = <div>
		<p>you are not adult</p>
	</div>

	return <>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>

		<>
			{checked ? messgeAdults : messageMinors}
		</>
	</>
}