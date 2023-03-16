import { generatorId } from "../../functions/functions"

export function Task16_4() {
	const users = [
		{ id: generatorId(), name: "Alex", surn: "Huyalex", age: "34" },
		{ id: generatorId(), name: "Gosha", surn: "Huesha", age: "35" },
		{ id: generatorId(), name: "Cipa", surn: "Huipa", age: "36" },
		{ id: generatorId(), name: "Timm", surn: "Huim", age: "37" }
	];

	console.log(users);
}