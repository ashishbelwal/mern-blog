import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  content: string;
}

async function getPosts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      cache: "no-store",
    });
    console.log({ response });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Home() {
  const data = await getPosts();
  return (
    <div>
      <h1 className="text-4xl font-bold">All Posts</h1>
      <ul>
        {data.map((post: Post) => (
          <Link href={`/posts/${post._id}`} key={post._id}>
            <li className="cursor-pointer">{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
