import axios from "axios";
import { useCallback, useState } from "react";

type Props = {
	"userId": string;
	"id": number;
	"title": string;
	"body": string;
}

export const useAllPosts = () => {
	const [posts, setPost] = useState<Array<Props>>([]);

	console.log("hooks/useAllPosts do.");

	const getPosts = useCallback( () => {
		console.log("hooks/getPosts do.");
		axios.get<Array<Props>>("https://jsonplaceholder.typicode.com/posts").then((response) => {
			setPost(response.data);
		}).catch(() => {
			console.log("通信エラーです。");
		});
	}, []);

	return { getPosts, posts }
}