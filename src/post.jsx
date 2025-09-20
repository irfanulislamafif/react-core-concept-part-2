export default function Post({ post }) {
  return (
    <div className="borderCard">
      <h5>{post.title}</h5>
      <p>{post.body}</p>
    </div>
  );
}
