import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: "hello world",
        body: "this is my first post",
      },
      {
        id: 2,
        title: "hello world!",
        body: "this is my second post",
      },
      {
        id: 3,
        title: "_hello_world_",
        body: "this is my third post",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
    <div className="App">
      {posts.map((post) => (
        <div className="App-item" key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    );
  }
}

export default App;
