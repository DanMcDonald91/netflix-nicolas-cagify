import React from 'react';

class MediaDetail extends React.Component {
  render(){
    if(!this.props.media){
      return null;
    }

    return (
<h3>
{this.props.media.show_title}
</h3>
      );
  }
}



export default MediaDetail;