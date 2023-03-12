export function Task7_4() {
	const str1 = "label";
	const str2 = "block";
	const str3 = "elem";

	return <div>
		<label id={str1} className={str2} htmlFor={str3}></label> <br />
		<input id={str2}></input>
	</div>

}