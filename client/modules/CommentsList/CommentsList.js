import React from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import Modal from 'react-modal';

// css
import css from './CommentsList.scss';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      deleteModalIsOpen: false
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
    this.setState({deleteModalIsOpen: true});
  }

  closeModal() {
    this.setState({
      deleteModalIsOpen: false,
      editModalIsOpen: false
    });
  }

  doDelete() {

  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <div>
        <ul className="list-group">
        {this.state.comments.map(comment =>
            <Comment key={comment.id} data={comment} onAction={this.actionHandler.bind(this, comment.id)}/>  
        )}
        </ul>
        
        <Modal
          isOpen={this.state.deleteModalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Delete"
        >
          <div className="deleteModal">
            <h2>Delete</h2>
            <div className="buttons">
              <button onClick={this.closeModal.bind(this)} className="btn btn-default btn-lg">No</button>
              <button onClick={this.doDelete.bind(this)} className="btn btn-danger btn-lg">Yes</button>
            </div>
          </div>

        </Modal>

      </div>
    );
  }
}

export default CommentsList;