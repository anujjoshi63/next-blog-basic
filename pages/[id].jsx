import React from 'react';
import Article from '../components/Article/Article';
const Post = ({ actualArticle }) => {
	return <Article pageData={actualArticle} />;
};
export async function getServerSideProps(context) {
	console.log(context);
	const actualArticle = await fetch(
		`https://dev.to/api/articles/${context.query.id}`
	)
		.then(res => res.json())
		.then(data => data);
	return { props: { actualArticle } };
}
export default Post;
