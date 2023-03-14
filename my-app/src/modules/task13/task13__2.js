export function Taask13_2() {
	let arr = [];

	for (let i = 1; i <= 5; i++) {
		arr.push(<li>{i + "X"}</li>)
	};

	return <ul>
		{arr}
	</ul>
}