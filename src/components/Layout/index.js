// Dependecies
import { Component } from 'react';
import { Row } from 'reactstrap';

// Css
import '../../styles/main.scss';

class Layout extends Component {
	render() {
		return (
			<aside className="Layout">
				{this.props.children}
			</aside>
		);
	}
}

export default Layout;