import Login from '@pages/Login';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>
					NextJS + Typescript + Tailwind + styled-components +
					storybook with AirBnB website clone
				</title>
				<meta
					name='description'
					content='AirBnB Clone created by Arigbede Omobolaji Paul.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Login />
		</>
	);
};

export default Home;
