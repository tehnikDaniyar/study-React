export function task9_3() {
	const isAuth = false;

	return <div>
		{!isAuth && <p>pleace log in</p>}
	</div>
}