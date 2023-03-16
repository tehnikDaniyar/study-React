import { nanoid } from "nanoid";
import uuid from "react-uuid";


function generatorId(amount) {
	return nanoid(amount);
};

function generatorUUID() {
	return uuid();
}

export { generatorId, generatorUUID }
