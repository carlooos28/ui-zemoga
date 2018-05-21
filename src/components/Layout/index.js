// Dependecies
import { Component } from 'react';

// Css
import '../../styles/main.scss';

class Layout extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Layout;