export function Task14_2() {
	const users = [
		{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
		{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
		{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
	];

	let res = users.map((elem) => {
		return <li key={elem.id}>
			<span>{"name:" + elem.name}</span><br />
			<span>{"surn:" + elem.surn}</span><br />
			<span>{"age:" + elem.age}</span>
		</li>
	});

	return <ul>
		{res}
	</ul>
};