export function Task9_1() {
	let age = 17;

	return <div>
		{age >= 18 ? <p>open</p> : <p>close</p>}
	</div>
}