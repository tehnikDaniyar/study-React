import { useState } from "react";

export function Task21_2() {
	let [js, setJs] = useState(true);
	let [css, setCss] = useState(true);
	let [html, setHtml] = useState(true);

	return <>
		<label><input type="checkbox" checked={js} onChange={() => setJs(!js)}></input>JS</label><br />
		<label><input type="checkbox" checked={css} onChange={() => setCss(!css)}></input>CSS</label><br />
		<label><input type="checkbox" checked={html} onChange={() => setHtml(!html)}></input>HTML</label>

		<p>{js ? "JS" : "No JS"}</p>
		<p>{css ? "CSS" : "No CSS"}</p>
		<p>{html ? "HTML" : "No HTML"}</p>

	</>
}