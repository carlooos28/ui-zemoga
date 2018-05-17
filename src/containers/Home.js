// Dependecies
import { Component } from 'react';

// Components
import Layout from '../components/Layout';
import App from '../components/App';

// Api
import Data from '../api.json'

class Home extends Component {

	render() { 
		return (
			<Layout>
                <App character={Data} />
			</Layout>
		)
	}
}

export default Home;