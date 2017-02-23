import React from 'react';
import CommentsList from './CommentsList/CommentsList';

class App extends React.Component {
  render() {
    return (
      <div className="well">
        <h1>BigPanda Message Board!</h1>
        <CommentsList />
      </div>
    );
  }
}

export default App;