import type { NextPage } from 'next'
import Hero from 'components/home/Hero'
import Layout from 'components/layout';
import About from 'components/home/About';
import Map from 'components/home/Map';
import Administrators from 'components/home/Administrators';

const Home: NextPage = () => (
	<Layout>
		<Hero />
		<Administrators />
		<Map />
		<About />
	</Layout>
);

export default Home;