export const loadPosts = async () => {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  const photosResponse = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const photos = await photosResponse.json();

  const postsWithPhotos = posts.map((post, index) => {
    return { ...post, cover: photos[index].url };
  });

  return postsWithPhotos;
};
