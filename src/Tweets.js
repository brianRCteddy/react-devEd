import React, { Component } from 'react';
import Tweet from './Tweet';

class Tweets extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onReset}>RESET</button>
				{this.props.tweets.map((tweet) => (
					<Tweet key={tweet.id} onIncrement={this.props.onIncrement} tweet={tweet} />
				))}
			</div>
		);
	}
}

export default Tweets;
