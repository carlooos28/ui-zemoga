// Dependecies
import { Component } from 'react';

// Css
import './styles.css';

class Layout extends Component {
	render() {
		return (
			<div className="Layout">
				{this.props.children}
			</div>
		);
	}
}

export default Layout;