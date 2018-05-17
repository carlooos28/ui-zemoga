// Dependecies
import { Component } from 'react';
import { Row, Col} from 'reactstrap';

// Components
import CandidateList from './candidatelist';

class Content extends Component {
	render() {
		return (
			<section>									
				<section className="Opinion">
					<Row>
						<Col lg="6" className="Opinion-article">
							<span>{this.props.question} </span>		
							<br/>	
							<span className="Character">{this.props.character} </span>
							<p className="Description">{this.props.description} </p>
							<p className="Link">
								W <a href={this.props.linkmoreinformation}> More information </a>  
							</p>
							<p>Whats Your Verdict?</p>
							<p>
								<span>Icon Up</span>
								<span>Icon Down</span>
							</p>
						</Col>											
					</Row>
					<Row>
						<Col lg="6" className="">
							<span >Closing In </span>		
						</Col>	
						<Col lg="6">
							<span>{this.props.closingin} </span>
							<span>Days</span>
						</Col>
					</Row>							
				</section>
				<Row>
					<Col lg="12">
						<p>
							<span>{this.props.messagetitle} </span>
							<strong>{this.props.messagedescription} </strong>
							<span>{this.props.message} </span>						
						</p>
					</Col>
				</Row>
				<section>
					<h2>Votes</h2>
					{
						this.props.votingboxes.map((item) => {
							return (
								<CandidateList 
									key={item.id}
									{...item}
								/>
							) 
						})
					}
				</section>				
			</section>
			);
	}
}

export default Content;