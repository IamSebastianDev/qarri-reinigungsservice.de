/** @format */
import fs from 'fs/promises';
import path from 'path';

const getServices = async ({ name }) => {
	const res = await fs.readFile(
		path.resolve(process.cwd(), './data/services.json'),
		'utf-8'
	);

	return name ? JSON.parse(res).find((data) => data.name === name) : res;
};

export const get = async ({ query }) => {
	const name = query.get('name');

	return {
		body: await getServices({ name }),
	};
};
