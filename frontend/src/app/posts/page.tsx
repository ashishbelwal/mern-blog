import PostsList from "@/components/posts-list";
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
export default async function Posts() {
  const data = await getPosts();
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>
      <PostsList posts={data} />
    </main>
  );
}
