import React, { useState } from 'react';

export default function AddTopic({ addNewTopic }) {
	const [topicTitle, setTopicTitle] = useState('');
	return (
		<section>
			<header>
				<h4 data-testid="add-topic-title">Add a topic</h4>
			</header>
			<article>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						addNewTopic(topicTitle);
						setTopicTitle('');
					}}
					className="add-topic"
				>
					<input
						data-testid="topic-title-input"
						required
						type="text"
						name="topic"
						placeholder="Type your topic idea here"
						value={topicTitle}
						onChange={(e) => setTopicTitle(e.target.value)}
					/>
					<button type="submit" data-testid="submit-button">
						Submit
					</button>
				</form>
			</article>
		</section>
	);
}
