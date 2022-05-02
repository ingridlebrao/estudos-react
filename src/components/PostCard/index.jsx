export const PostCard = ({post}) => {

    return (
        <div className="App">
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="App-item">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
        </div>
    );
}