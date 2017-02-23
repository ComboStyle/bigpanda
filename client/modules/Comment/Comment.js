import React from 'react';

class Comment extends React.Component {
  handleEdit() {
    this.props.onAction('edit');
  }

  handleDelete() {
    this.props.onAction('delete');
  }

  render() {
    return (
      <li className="list-group-item">
        <strong>{this.props.data.email}</strong>
        <div>{this.props.data.comment}</div>
        <div className="btn-group">
            <button onClick={this.handleEdit.bind(this)} className="btn btn-success">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
            <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
        </div>
      </li>
    );
  }
}

export default Comment;