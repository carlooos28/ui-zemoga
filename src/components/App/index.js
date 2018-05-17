// Dependecies
import { Component } from 'react';

// Components
import Header from '../Header';
import Content from './content';

// Css
import './styles.css';

// Logo
import logo from '../../assets/pope.png';
	
class App extends Component {
	render() {
		return (
			<section>
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
			</section>
		);
	}
}

export default App;