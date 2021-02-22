import React from 'react';

export default function AddTopic({ addNewTopic }) {
	return (
		<section>
			<header>
				<h4>Add a topic</h4>
			</header>
			<article>
				<form onSubmit={(e) => addNewTopic(e)} className="add-topic">
					<input
						required
						type="text"
						name="topic"
						placeholder="Type your topic idea here"
					/>
					<button type="submit">Submit</button>
				</form>
			</article>
		</section>
	);
}
