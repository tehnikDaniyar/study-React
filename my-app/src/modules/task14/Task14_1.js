export function Task14_1() {
	const users = [
		{ name: 'user1', surn: 'surn1', age: 30 },
		{ name: 'user2', surn: 'surn2', age: 31 },
		{ name: 'user3', surn: 'surn3', age: 32 },
	];

	let res = users.map((elem, index) => {
		return <li key={index}>
			<span>{elem.name}</span><br />
			<span>{elem.surn}</span><br />
			<span>{elem.age}</span>
		</li>
	});

	return <ul>
		{res}
	</ul>
};