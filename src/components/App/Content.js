// Dependecies
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Containers 
import CandidateList from '../../containers/Candidatelist';

// Components
import Header from '../Header';
import AddCharacter from './Add-character';
import HandUp from '../Icons/handup';
import DownHand from '../Icons/downhand';
import Footer from '../Footer';

class Content extends Component {
	render() {
		let divStyle = {
			backgroundImage: 'url(images/' + this.props.image + ')',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		  };
		return (
			<Col>
				<Header />
					<Row style={divStyle} className="Opinion">
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
						<Col lg="5" className="Container-closing-in d-none d-sm-block">
							<span className="float-right Closing-in">CLOSING IN </span>		
						</Col>	
						<Col lg="7" className="Container-days d-none d-sm-block">
							<span className="Number-days">{this.props.closingin} </span>
							<span className="Number-days">days</span>
						</Col>
					</Row>

				<section className="container">					
					<Col lg="12">
						<Row className="Message">
							<Col lg="3">							
								<span className="Message-title">{this.props.messagetitle} </span>
								<br/>
								<strong className="Message-description">{this.props.messagedescription} </strong>					
							</Col>
							<Col lg="9">		
								<article className="Message-content">					
									<span>{this.props.message} </span>						
								</article>
							</Col>								
						</Row>
					</Col>

					<section>
						<Row>
							<Col lg="12">
								<h1 className="Votes-title">Votes</h1>
							</Col>									
						</Row>						
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
					<AddCharacter />				
					<Footer />				
				</section>
			</Col>
			);
	}
}

export default Content;