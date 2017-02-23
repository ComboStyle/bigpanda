import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <strong>{this.props.data.email}</strong>
        <div>{this.props.data.comment}</div>
        <div className="btn-group">
            <button type="submit" className="btn btn-success"><span className="glyphicon glyphicon-pencil"></span></button>
            <button type="submit" className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span></button>
        </div>
      </li>
    );
  }
}

export default Comment;