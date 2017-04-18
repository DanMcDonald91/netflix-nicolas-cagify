import React from 'react';
import MediaSelector from '../components/MediaSelector';
import MediaDetail from '../components/MediaDetail';


class ActorContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      actor: "Nicolas Cage",
      movies: []
    };
  }

  componentDidMount(){
    var url = "http://netflixroulette.net/api/api.php?actor=" + this.state.actor;

    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = () => {
      this.setState({
        movies: JSON.parse(request.responseText)
      });
    };
    request.send();

    // console.log(this.state.movies);
  };

setFocusMedia(media){
  this.setState({
    focusMedia: media
  });
}

handleClick(event){
  this.setState({
    actor: (document.getElementById("find-actor").value)
    

},
() => {
  var url = "http://netflixroulette.net/api/api.php?actor=" + this.state.actor;
  console.log(url)

  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.onload = () => {
    this.setState({
      movies: JSON.parse(request.responseText)
    });
    console.log(this.state.movies);
  };
  request.send();

}

)

  
  



};

  render(){
    return(
      <div>
      <h2> Actor Container </h2>
      <MediaSelector movies={this.state.movies} selectMedia ={this.setFocusMedia.bind(this)}/>
      <p>{this.state.actor}</p>
      <p> and a quiche</p>
      <input id="find-actor" type="text" />
      <button id="btn-find-actor" onClick= {(event) => {this.handleClick(event)}}>do they go here </button>
      </div>
    );
  }
}

// module.exports = ActorContainer;

export default ActorContainer;