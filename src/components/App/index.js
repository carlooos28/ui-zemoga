// Dependecies
import { Component } from 'react';
import { Row } from 'reactstrap';

// Components
import Content from './Content';

// Css
import './styles.scss';
	
class App extends Component {
	render() {
		return (
			<Row>						
				{
					this.props.character.map((item) => {
					return (
						<Content
							key={item.id}
							{...item}
						/>
					)
					})
				}
			</Row>
		);
	}
}

export default App;