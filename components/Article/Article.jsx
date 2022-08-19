import React from 'react';
import Image from 'next/image';
const Article = ({ pageData: pd }) => {
	// console.log('hey', pd);
	if (pd.error) {
		pd = { title: 'page not found', body_html: '<h1>NAI' };
	}
	return (
		<>
			<h1>{pd.title}</h1>
			<Image src={pd.cover_image} height={500} width={500} />
			<div
				dangerouslySetInnerHTML={{
					__html: pd.body_html
				}}
			/>
		</>
	);
};

export default Article;
