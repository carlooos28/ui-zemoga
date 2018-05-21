// Dependecies
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'reactstrap';

// Icons
import Search from '../Icons/search';

// Css
import './styles.scss';

class Header extends Component {
	render() {
		return (			
			<footer>
				<p>
					Terms and Conditions Privacy policy Contact Us					
				</p>
				<p>
					Follow Us
				</p>
			</footer>
		);
	}
}

export default Header;