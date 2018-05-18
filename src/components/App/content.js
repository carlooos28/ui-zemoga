// Dependecies
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Components
import CandidateList from './candidatelist';
import HandUp from '../Icons/handup';
import DownHand from '../Icons/downhand';

class Content extends Component {
	render() {
		return (
			<section>									
				<section className="Opinion">
					<Row>
						<Col lg="6" className="Container-opinion">
							<article className="Opinion-article">
								<p>{this.props.question} </p>		
								<p className="Character">{this.props.character} </p>
								<p className="Description">{this.props.description} </p>
								<p className="Link">
									W <a href={this.props.linkmoreinformation}> More information </a>  
								</p>
								<p>Whats Your Verdict?</p>
								<br/>
								<p>
									<span><HandUp size={36} color="#ffffff" /></span>
									<span><DownHand size={36} color="#ffffff" /></span>
								</p>
							</article>
						</Col>											
						<Col lg="6"></Col>	
					</Row>

					<Row>
						<Col lg="5" className="Container-closing-in">
							<span className="float-right Closing-in">CLOSING IN </span>		
						</Col>	
						<Col lg="7" className="Container-days">
							<span className="Number-days">{this.props.closingin} </span>
							<span className="Number-days">days</span>
						</Col>
					</Row>

				</section>
				<section className="container">					
					<Row>
						<Col lg="12">
							<Row className="Message">
								<Col lg="3">							
									<span className="Message-title">{this.props.messagetitle} </span>
									<strong className="Message-description">{this.props.messagedescription} </strong>					
								</Col>
								<Col lg="9">		
									<article className="Message-content">					
										<span>{this.props.message} </span>						
									</article>
								</Col>								
							</Row>
						</Col>
					</Row>
				

				<section>
					<h1 className="Votes-title">Votes</h1>
					<Row>
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
					</Row>
				</section>				
	
				</section>
			</section>
			);
	}
}

export default Content;