import React from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

 componentDidMount() {
    axios.get(`/comments`)
      .then(res => {
        console.log(res.data);
        const comments = res.data;
        this.setState({ comments });
      });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
        {this.state.comments.map(comment =>
            <Comment key={comment.id} data={comment} />  
        )}
        </ul>
      </div>
    );
  }
}

export default CommentsList;