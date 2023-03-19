import React, { useState } from "react";
import { generatorId } from "../../functions/functions";

export function Task17_5() {
	let [name, setName] = useState("John");
	let [surn, setSurn] = useState("Smit");
	let [age, setAge] = useState(30);

	const users = [
		{ id: generatorId(), name: name, surn: surn, age: age },
	];

	let res = users.map(elem => <tr key={elem.id}>
		<td>{elem.name}</td>
		<td>{elem.surn}</td>
		<td>{elem.age}</td>
	</tr>)

	let [isBan, changeState] = useState(false);



	return <>
		<table>
			<tbody>
				<tr>
					<th>Name</th>
					<th>Surn</th>
					<th>Age</th>
				</tr>
				{res}
				<tr>{isBan ? "banned" : "nebanned"}</tr>
			</tbody>
		</table>

		<button onClick={() => setName("Den")}>change name</button>
		<button onClick={() => setSurn("Bash")}>change surn</button>
		<button onClick={() => setAge(37)}>change age</button>
		{/* <button onClick={() => changeState(!isBan)} className={isBan ? "green" : "red"}>{isBan ? "reban" : "ban"}</button> */}
		<button className={isBan ? "active" : ""} onClick={() => changeState(true)}>ban</button>
		<button className={isBan ? "" : "active"} onClick={() => changeState(false)}>reban</button>

		<button onClick={() => setAge(age + 1)}>age up</button>
		<button onClick={() => setAge(age - 1)}>age down</button>

	</>
}