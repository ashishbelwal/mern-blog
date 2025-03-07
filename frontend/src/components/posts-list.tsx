import Link from "next/link";
type Post = {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
};
type PostsListProps = {
  posts: Post[];
};

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`/posts/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
