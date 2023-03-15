export function Task15_1() {
	const users = [
		{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
		{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
		{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
	];

	let res = users.map(data => <tr key={data.id}>
		<td>{data.name}</td>
		<td>{data.surn}</td>
		<td>{data.age}</td>
	</tr>);

	return <>
		<table>
			<tbody>
				<tr>
					<th>name</th>
					<th>surn</th>
					<th>age</th>
				</tr>
				{res}
			</tbody>
		</table>
	</>
};

