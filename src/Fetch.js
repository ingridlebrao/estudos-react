import React from "react";
import "./App.css";
import { PostCard } from "./components/PostCard";

class Fetch extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await postsResponse.json();

    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await photosResponse.json();

    const postsWithPhotos = posts.map((post, index) => {
      return { ...post, cover: photos[index].url };
    });
    this.setState({ posts: postsWithPhotos});
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="post">
          {posts.map(post => (
            <PostCard 
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Fetch;
