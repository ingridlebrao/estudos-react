import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
    <div className="post">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
              post={post}
            />
          ))}
        </div>
);
