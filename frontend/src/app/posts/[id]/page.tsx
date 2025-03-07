export default async function Post({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`
  );
  const data = await response.json();
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-3">Post {data.title}</h4>
      <p className="text-lg">{data.content}</p>
      <p className="text-sm text-gray-500">
        Created at: {new Date(data.date).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">Author: {data.author}</p>
    </div>
  );
}
