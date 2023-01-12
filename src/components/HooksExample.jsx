import useFetch from "../hooks/useFetch";

export const HooksExample = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading === true) {
    return <p>loading</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};
