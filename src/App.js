import React, { Component } from 'react';
import './App.css';
import Tweets from './Tweets';

class App extends Component {
	state = {
		tweets: [
			{ id: 1, name: 'Ted', tweet: 'balakajan', numOfLikes: 1 },
			{ id: 2, name: 'Yema', tweet: 'penge dentastix', numOfLikes: 2 },
			{ id: 3, name: 'Ed', tweet: 'aral pa boy', numOfLikes: 3 }
		]
	};

	addLikesHandler = (liker) => {
		const tweets = [ ...this.state.tweets ];
		const index = tweets.indexOf(liker);
		tweets[index] = { ...liker };
		tweets[index].numOfLikes++;
		this.setState({ tweets: tweets });
	};

	render() {
		return (
			<React.Fragment>
				<main className="container">
					<Tweets tweets={this.state.tweets} onIncrement={this.addLikesHandler} />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
