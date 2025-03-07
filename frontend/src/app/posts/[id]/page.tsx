export default async function Post({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-3">Post {data.title}</h4>
      <p className="text-lg">{data.body}</p>
    </div>
  );
}
