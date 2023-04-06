import { useState } from "react";
const Task31_1 = function () {
	const [obj, setObj] = useState({ prop1: "value1", prop2: "value2", prop3: "value3" });
	let res = [];
	for (let key in obj) {
		res.push(<p>{obj[key]}</p>)
	}


	return <div className="Component">
		{res}
		<button onClick={() => setObj({ ...obj, ...{ prop1: "!" } })}>change value1</button>
		<button onClick={() => setObj({ ...obj, ...{ prop2: "!" } })}>change value2</button>
		<button onClick={() => setObj({ ...obj, ...{ prop3: "!" } })}>change value3</button>

	</div>
}
export default Task31_1