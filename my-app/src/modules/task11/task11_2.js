export function Task11_2() {
	const show = (num) => alert(num);

	return <>
		<button onClick={() => show(1)}>act1</button>
		<button onClick={() => show(2)}>act2</button>
		<button onClick={() => show(3)}>act3</button>
	</>
};