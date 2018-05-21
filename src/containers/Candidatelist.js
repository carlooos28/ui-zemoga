// Dependecies
import { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

// Components 
import HandUp from '../components/Icons/handup';
import DownHand from '../components/Icons/downhand';

class CandidateList extends Component {	
	state = {
		upvote: false,
		upbotton: false,
		upcount: isNaN(localStorage.getItem('upcount_'+this.props.id)) ? 0 : Number(localStorage.getItem('upcount_'+this.props.id)),
		downcount: isNaN(localStorage.getItem('downcount_'+this.props.id)) ? 0 : Number(localStorage.getItem('downcount_'+this.props.id)),
	}	
	handleUpVoteClick = (event) => {
		this.setState({
			upvote: true,
			upbotton: true
		})		
	}	
	handleDownVoteClick = (event) => {
		this.setState({
			upvote: false,
			upbotton: true
		})		
	}	
	onVote = (event) => {
		if(this.state.upbotton) {
			if(this.state.upvote) {		
				let totalUpCount = Number(localStorage.getItem('upcount_'+this.props.id)) + 1;				
				localStorage.setItem('upcount_'+this.props.id, totalUpCount)
	
				this.setState(prevState => ({
					upcount: Number(localStorage.getItem('upcount_'+this.props.id)),
					upbotton: false
				}))		
			
			} else {
				let totalDownCount = Number(localStorage.getItem('downcount_'+this.props.id)) + 1;
				localStorage.setItem('downcount_'+this.props.id, totalDownCount);

				this.setState(prevState => ({
					downcount: Number(localStorage.getItem('downcount_'+this.props.id)),
					upbotton: false
				}))			
			}
		}
	}
	render() {
		let totalUpCount   = Math.round(this.state.upcount / (this.state.upcount + this.state.downcount)*100),
			totalDownCount = Math.round(this.state.downcount / (this.state.upcount + this.state.downcount)*100);

			totalUpCount   = isNaN(totalUpCount) ? 0 : totalUpCount;
			totalDownCount = isNaN(totalDownCount) ? 0 : totalDownCount


		let divStyle = {
			backgroundImage: 'url(images/' + this.props.image + ')',
			height: '560px',
			backgroundSize: 'cover'
		  },
		  upVotingResultStyle = {
		  	width: totalUpCount === 0 ? 50 + '%' : totalUpCount + '%'
		  },
		  downVotingResultStyle = {
		  	width: totalDownCount === 0 ? 50 + '%' : totalDownCount + '%'
		  };

		return (
			<Col lg="6" className="Candidate" >
				<div style={divStyle} className="img-fluid">
					<div className="Votes-character">					
						<p className="Title-character">	
							<span><HandUp size={16} color="#ffffff" /></span>						
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
								<Button outline color="info" className="Votes-up" onClick={this.handleUpVoteClick}><HandUp size={16} color="#ffffff" /></Button>
								<Button outline color="warning" className="Votes-down" onClick={this.handleDownVoteClick}><DownHand size={16} color="#ffffff" /></Button>
								<Button className="btn-md Btn-vote" onClick={this.onVote}>Vote now</Button>						 
							</p>				
						</section>					
						<p className="Voting-result">
							<span style={upVotingResultStyle}>
								<HandUp size={28} color="#ffffff" />
								<span className="Total">{totalUpCount}% </span>
							</span>
							<span style={downVotingResultStyle}>
								<DownHand size={28} color="#ffffff" /> 
								<span className="Total"> {totalDownCount}% </span>
							</span>
						</p>										
					</div>
				</div>	
			</Col>							
			);
	}
}

export default CandidateList;