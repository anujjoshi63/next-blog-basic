import Head from 'next/head';
import MRC from '../components/MRC/MRC';
export default function Home({ posts }) {
	return <MRC posts={posts} />;
}
export async function getServerSideProps(context) {
	console.log(context);
	const posts = await fetch(
		'https://dev.to/api/articles?username=nataliedeweerd'
	)
		.then(res => res.json())
		.then(data => data);
	return { props: { posts } };
}
