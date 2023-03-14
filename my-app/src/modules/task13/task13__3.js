export function Taask13_3() {
	let arr = ["a", "b", "c", "d", "e"];

	let res = arr.map((elem, index) => <li key={index}>{elem}</li>);

	return <ul>
		{res}
	</ul>
}