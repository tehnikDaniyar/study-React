import React, { useState } from "react";

export function Task18_4() {
	let [value, changeValue] = useState(20);

	function getYearBirthday(age) {
		return new Date().getFullYear() - Number(age);
	};

	return <>
		<input value={value} onChange={(evnt) => changeValue(evnt.target.value)}></input>
		<p>{getYearBirthday(value)}</p>
	</>
}