import React from 'react';

class MediaSelector extends React.Component {
constructor(props) {
super(props);
this.state = {
  selectedIndex: undefined
};
}

handleChange(event){
  var newIndex = event.target.value;
  this.setState({
    selectedIndex: newIndex
  });

  var selectedMedia = this.props.movies[newIndex];
  this.props.selectMedia(selectedMedia);
}

render() {

var options = this.props.movies.map((media, index) => {
  return <option value={index} key={index}>{media.show_title}</option>

});

return (
  <select id="movies"
  value = {this.state.selectedIndex}
  onChange={(event) => { this.handleChange(event) }} >
    {options}
    </select>);
}



}


export default MediaSelector;




