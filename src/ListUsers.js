import React, { Component } from 'react';

class ListUsers extends Component{
	render(){
    	return (
          <ol>
          {this.props.profiles.map((profile) => (
        	<li key={profile.id}>
				<div>
					<p>{this.props.users[profile.userID].name}'s favorite movie is "{this.props.movies[profile.favoriteMovieID].name}".</p>
				</div>
			</li>
        ))}	
          </ol>
        )
    }
}

export default ListUsers