import React from "react";
import { Button } from "../../components/Button";
import { loadPosts } from "../../components/Load/load-posts";
import { Posts } from "../../components/Posts";
import { TextInput } from "../../components/TextInput";
import "./styles.css";

class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: "",
  };

  async componentDidMount() {
    const { page, postsPerPage } = this.state;
    const postsWithPhotos = await loadPosts();

    this.setState({
      posts: postsWithPhotos.slice(page, postsPerPage),
      allPosts: postsWithPhotos,
    });
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? posts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <h1 className="posts-header">✨ Posts ✨</h1>
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <h2 className="posts-notfound">No posts found including <span className="post-notfound-span">"{searchValue}"</span></h2>}
        
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Load more posts"
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
