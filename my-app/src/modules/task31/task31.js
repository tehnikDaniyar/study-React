import { useState } from "react";
const Task31 = function () {
	const [obj, setObj] = useState({
		prop1: "value1",
		prop2: "value2",
		prop3: "value3",
	});

	function changeObj() {
		setObj({ ...obj, ...{ prop1: "!" } })
	}


	return <div className="Component">
		<span>{obj.prop1}</span><br />
		<span>{obj.prop2}</span><br />
		<span>{obj.prop3}</span><br />
		<button onClick={() => changeObj()}>change</button>
	</div>
}
export default Task31