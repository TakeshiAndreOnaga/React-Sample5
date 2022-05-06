import { PostList } from "../components/pages/PostList";
import { Top } from "../components/pages/Top";

export const routes = [
	{
		path: "/",
		exact: true,
		children: <Top />
	},
	{
		path: "/posts",
		exact: true,
		children: <PostList />
	},
];