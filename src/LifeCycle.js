import React from "react";
import "./App.css";

class LifeCycle extends React.Component {
  state = {
    counter: 0,
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

  //quando o componente for montado na tela
  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoOutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = "hello diferente";

    this.timeoOutUpdate = setTimeout(() => {
      this.setState({
        posts,
        counter: counter + 1,
      });
    }, 5000);
  };

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <p>{counter}</p>
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

export default LifeCycle;
