// Dependecies
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

// Icons
import Twitter from '../../assets/images/twitter.png';
import Facebook from '../../assets/images/facebook.png';

// Css
import './styles.scss';

class Header extends Component {
	render() {
		return (			
			<footer>
				<Row>
					<div className="col-lg-9 col-xs-12 terms">
						<span>Terms and Conditions</span>
						<span>Privacy Policy</span>
						<span>Contact Us</span>							  					
					</div>	
					<div className="col-lg-3 col-xs-12 follow">
						<span>
							Follow Us							
						</span>
						<img src={Facebook} alt="Facebook" />
						<img src={Twitter} alt="Twitter" />
					</div>	
				</Row>
			</footer>
		);
	}
}

export default Header;