import React from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import Modal from 'react-modal';

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

  actionHandler(commentId, action) {
    console.log(action, commentId);
  }

  render() {
    return (
      <div>
        <ul className="list-group">
        {this.state.comments.map(comment =>
            <Comment key={comment.id} data={comment} onAction={this.actionHandler.bind(this, comment.id)}/>  
        )}
        </ul>
        
        <Modal
          isOpen={this.state.deleteModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Delete"
        >
          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

      </div>
    );
  }
}

export default CommentsList;