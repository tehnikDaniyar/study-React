export function Task12_2() {
	const getEvent = (event) => {
		console.log(event.target);
	}

	return <>
		<button onClick={getEvent}>SHOW ME EVENT</button>
	</>

}