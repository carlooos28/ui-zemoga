// Dependecies
import { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

// Components
import Header from '../Header';
import Content from './Content';

// Css
import './styles.scss';
	
class AddCharacter extends Component {
	render() {
		return (
			<section className="Add-character">
				<Row>
					<div className="col-lg-8 col-xs-12">
						<p>
							Is there anyone else you would want us to add ? 					
						</p>
					</div>
					<div className="col-lg-4 col-xs-12">
						<Button outline color="secondary" className="Submit-a-name">Submit a Name</Button>
					</div>
				</Row>
			</section>
		);
	}
}

export default AddCharacter;