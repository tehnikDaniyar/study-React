export function Task12_1() {
	const getEvent = (event) => {
		console.log(event);
	}

	return <>
		<button onClick={getEvent}>SHOW ME EVENT</button>
	</>

}