import useFetch from "../hooks/useFetch";

export const HooksExample = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading === true) {
    return <p>loading...</p>;
  }
  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
