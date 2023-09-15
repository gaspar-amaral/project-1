import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
      posts: [
          {
            id: 1,
            title: 'This is the title 1',
            body: 'This is the body 1'
          },
          {
            id: 2,
            title: 'This is the title 2',
            body: 'This is the body 2'
          }, {
            id: 3,
            title: 'This is the title 3',
            body: 'This is the body 3'
          }
        ]
    };

  render () {
    const {posts} = this.state;

      return (   
        <div className="App">
          {posts.map(post => 
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.title} - {post.body}</p>
            </div>
          )}
        </div>
      )
    }
  };


export default App;
