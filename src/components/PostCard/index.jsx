export const PostCard = ({ title, cover, body, id}) => (
        <div className="App">
            <div className="post">
              <img src={cover} alt={title} />
              <div className="App-item">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
        </div>
    );