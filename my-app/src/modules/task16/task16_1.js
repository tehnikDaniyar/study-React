import { nanoid } from "nanoid";
import uuid from "react-uuid";

export const Task16_1 = () => {
	let id = nanoid(10);
	console.log(id);

	let id2 = uuid();
	console.log(id2);
}
