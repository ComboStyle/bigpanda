import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <li>{this.props.data.comment}</li>
    );
  }
}

export default Comment;