import React from 'react';
import Image from 'next/image';
const Article = ({
	pageData: pd = { title: 'page not found', body_html: '<h1>NAI' }
}) => {
	console.log('hey PD', pd);
	// if (pd?.error) {
	// 	pd = { title: 'page not found', body_html: '<h1>NAI' };
	// }
	// if (pd)
	return (
		<>
			<h1>{pd.title}</h1>
			<Image
				src={pd.cover_image ?? '/vercel.svg'}
				alt="This is a wonderful image "
				height={500}
				width={500}
			/>
			<div
				dangerouslySetInnerHTML={{
					__html: pd.body_html
				}}
			/>
		</>
	);
};

export default Article;
