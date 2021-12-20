/** @format */
import fs from 'fs/promises';
import path from 'path';

const getServices = async () => {
	const res = await fs.readFile(
		path.resolve(process.cwd(), './data/services.json'),
		'utf-8'
	);

	return res;
};

export const get = async () => {
	return {
		body: await getServices(),
	};
};
