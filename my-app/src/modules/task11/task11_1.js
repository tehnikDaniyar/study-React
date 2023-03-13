export function Task11_1() {
	const show1 = () => alert(1);
	const show2 = () => alert(2);

	return <div>
		<button onClick={show1}>show1</button> <br />
		<button onClick={show2}>show2</button>
	</div>
}