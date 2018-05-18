// Dependecies
import { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

// Components 
import HandUp from '../Icons/handup';
import DownHand from '../Icons/downhand';

class CandidateList extends Component {
	render() {
		const divStyle = {
			backgroundImage: 'url(images/' + this.props.image + ')',
			height: '560px'			
		  };		  

		return (
			<Col lg="6"  >
				<div style={divStyle} ClassName="img-fluid">
					<div className="Votes-character">
					<div>
				<p className="Title-character">	
					<span className="Votes-up"><HandUp size={16} color="#ffffff" /></span>						
					<span> {this.props.character} </span>
				</p>
				<section className="Votes">
					<p className="Section-time">
						<span>
							<strong>{this.props.sectiontime} month ago </strong>
						</span> 
						<span> in {this.props.section}</span>
					</p>		
					<p>
						{this.props.description}
					</p>						
					<p>
						<span className="Votes-up"><HandUp size={16} color="#ffffff" /></span>
						<span className="Votes-down"><DownHand size={16} color="#ffffff" /></span>
						<Button className="btn-md btn btn-outline-dark">Vote now</Button>
					</p>				
				</section>					
				<p className="Voting-result">
						<span><HandUp size={28} color="#ffffff" /> 80% </span>
						<span><DownHand size={28} color="#ffffff" /> 20% </span>
					</p>										
					{this.props.upvotes}
					{this.props.downvotes}
					</div></div>
				</div>	
			</Col>							
			);
	}
}

export default CandidateList;