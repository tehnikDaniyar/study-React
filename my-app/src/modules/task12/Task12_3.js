export function Task12_3() {
	const func = (arg, event) => console.log(arg, event);

	return <>
		<button onClick={(event) => func("xxx", event.target)}>Task12_3</button>
	</>

}