import React, { Component } from 'react';

class Tweet extends Component {
	render() {
		return (
			<div className="Tweet">
				<h3>{this.props.tweet.name}</h3>
				<p>{this.props.tweet.tweet}</p>
				<h3>{this.props.tweet.numOfLikes}</h3>
				<button
					onClick={() => {
						this.props.onIncrement(this.props.tweet);
					}}
				>
					Like
				</button>
			</div>
		);
	}
}

export default Tweet;
