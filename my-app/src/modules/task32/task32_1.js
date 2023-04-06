import { useState } from "react";
const Task32_1 = function () {
	const initDate = {
		year: 2025,
		month: 12,
		day: 31,
	};

	const [date, setDate] = useState(initDate);
	const [valueYear, setValueYear] = useState("");
	const [valueMonth, setValueMonth] = useState("");
	const [valueDay, setValueDay] = useState("");


	function getNameDay(num) {
		if (num > 6 || num < 0) {
			return "incorrect day numer";
		}
		let arr = ["sun", "mon", "tus", "wen", "thus", "fri", "sat"];
		return arr[num];
	}


	return <div className="Component">
		<p>{date.year} - {date.month} - {date.day} - {getNameDay(new Date(date.year, date.month, date.day).getDay())}</p>
		<input value={valueYear} onChange={(e) => setValueYear(e.target.value)} onBlur={(e) => setDate({ ...date, ...{ year: valueYear } })}></input>
		<input value={valueMonth} onChange={(e) => setValueMonth(e.target.value)} onBlur={(e) => setDate({ ...date, ...{ month: valueMonth } })}></input>
		<input value={valueDay} onChange={(e) => setValueDay(e.target.value)} onBlur={(e) => setDate({ ...date, ...{ day: valueDay } })}></input>

	</div>
}
export default Task32_1