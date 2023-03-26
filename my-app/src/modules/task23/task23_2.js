import { useState } from "react";

export function Task23_2() {
	let [value, setValue] = useState("JS");

	return <>
		<input type="radio" name="radio" value="JS" onChange={() => setValue("JS")} checked={value == "JS" ? true : false} /><span>JS</span><br></br>
		<input type="radio" name="radio" value="C++" onChange={() => setValue("C++")} checked={value == "C++" ? true : false} /><span>C++</span><br></br>
		<input type="radio" name="radio" value="Java" onChange={() => setValue("Java")} checked={value == "Java" ? true : false} /><span>Java</span>
		<p>{value == "JS" ? "JS You are well done" : value}</p>
	</>
}