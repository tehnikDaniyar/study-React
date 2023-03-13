export function Task10_1() {

	const getDigitsSumm = (num) => [...String(num)].reduce((summ, num) => summ + +num, 0);

	return <div>
		<p>{getDigitsSumm(123) + getDigitsSumm(12345)}</p>
	</div>
}