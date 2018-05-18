// Dependecies
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'reactstrap';

// Icons
import Search from '../Icons/search';
// Css
import './styles.css';

class Header extends Component {
	render() {
		return (			
			<header className="Header col">
				<Nav className="navbar navbar-expand-lg navbar-light">

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<div className="navbar-nav mr-auto">
							<a className="navbar-brand mr-auto" href="#">
								<h2 className="Title-logo">Rule of Thumb.</h2>
							</a>
						</div>
							<ul className="navbar-nav">
								<li className="nav-item active">
									<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<Link  className="nav-link" to="/past-trials">Past Trials</Link>
								</li>
								<li className="nav-item">
									<Link  className="nav-link" to="/past-trials">How It Works</Link>
								</li>	  
								<li className="nav-item">
									<Link  className="nav-link" to="/past-trials">Log In / Sign Up</Link>
								</li>	  	  
							</ul>
							
							<form className="form-inline my-2 my-lg-0">	
								<span className="Search-icon"><Search size={36} color="#ffffff" /></span>
							</form>
					</div>
				</Nav>									
			</header>
		);
	}
}

export default Header;