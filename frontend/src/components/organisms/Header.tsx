import { memo, useState } from "react";
import { Link } from "react-router-dom"

// memo化することにより、HeaderLayoutのカウントアップ時に子であるHeaderコンポーネントが再描画されなくなる
export const Header = memo(() => {
	const [ count, setCount ] = useState<number>(0);

	const handleOnClick = () => {
		setCount(count + 1);
	}

	console.log("Header");

	return (
		<>
			<div style={{display: "flex", gap: "0px 2rem", marginBottom: "20px"}}>
				<Link to="/">TOPページ</Link>
				<Link to="/posts">投稿一覧ページ</Link>
				<h4>count数：{count}</h4>
				<button onClick={handleOnClick}>カウント</button>
			</div>
		</>
	)
})