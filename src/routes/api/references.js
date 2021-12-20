/** @format */
import fs from 'fs/promises';
import path from 'path';

const getReferences = async () => {
	return await fs.readFile(
		path.resolve(process.cwd(), './data/references.json'),
		'utf-8'
	);
};

export const get = async () => {
	return {
		body: await getReferences(),
	};
};
