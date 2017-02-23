import React from 'react';
import CommentsList from './CommentsList/CommentsList';

class App extends React.Component {
  render() {
    return (
      <div className="well">
        BigPanda!
        <CommentsList />
      </div>
    );
  }
}

export default App;