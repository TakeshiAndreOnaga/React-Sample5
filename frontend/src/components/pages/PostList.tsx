import { useEffect, useState } from "react";
import { useAllPosts } from "../../hooks/useAllPosts";

export const PostList = () => {
	const { getPosts, posts } = useAllPosts();
	console.log("poist");
	console.log(posts);

	const [ count, setCount ] = useState<number>(0);

	const handleOnClick = () => {
		setCount(count + 1);
	}

	useEffect(() => {
		console.log("useEffect do.");
		getPosts();
	},[getPosts])
	
	return (
		<>
			<h3>
				投稿一覧ページ
				<p>count数：{count}</p>
				<button onClick={handleOnClick}>カウント</button>
			</h3>
			<div>
				{posts.map((post) => (
					<p key={post.id} style={{marginBottom: "20px", backgroundColor: "blue"}}>{post.body}</p>
				))}
			</div>
		</>
	)
}