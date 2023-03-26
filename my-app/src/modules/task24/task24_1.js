import { useState } from "react";

export function Task24_1() {
	let [value, setValue] = useState("state value");

	let [checked, setChecked] = useState(false);
	let [checked2, setChecked2] = useState(false);
	let [checked3, setChecked3] = useState(false);
	let [valueRadio, setValueRadio] = useState("OK");

	return <>
		<input defaultValue="default value" onChange={(e) => setValue(e.target.value)}></input>

		<p>{value}</p>

		<input type="checkbox" defaultChecked="true" checked={checked} onChange={() => setChecked(!checked)}></input>
		<input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)}></input>
		<input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)}></input>

		<input type="radio" name="radio" value="OK" checked={valueRadio == "OK" ? true : false} onChange={() => setValueRadio("OK")}></input>
		<input type="radio" name="radio" value="NO" checked={valueRadio == "NO" ? true : false} onChange={() => setValueRadio("NO")}></input>
		<input type="radio" name="radio" value="YES" checked={valueRadio == "YES" ? true : false} onChange={() => setValueRadio("YES")}></input>
	</>
} 