import * as path from 'path';

export const paths = {
	appBuild: path.join(__dirname, '../build'),
	appPublic: path.join(__dirname, '../public'),
	appSrc: path.join(__dirname, '../src'),
	appHtml: path.join(__dirname, '../public', 'index.html'),
	appIndexJs: path.join(__dirname, '../src', 'index.tsx'),
	appTsConfig: path.resolve(__dirname, '../tsconfig.json'),
};
