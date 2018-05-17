// Dependecies
import { Component } from 'react';

class CandidateList extends Component {
	render() {
		return (
			<section>
				<article>
					{this.props.character}
					{this.props.sectiontime}
					{this.props.section}
					{this.props.description}
					{this.props.upvotes}
					{this.props.downvotes}
				</article>				
			</section>
			);
	}
}

export default CandidateList;