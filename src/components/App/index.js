// Dependecies
import { Component } from 'react';

// Components
import Header from '../Header';
import Content from './content';

// Css
import './styles.css';
	
class App extends Component {
	render() {
		return (
			<div>
				<Header />
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
			</div>
		);
	}
}

export default App;