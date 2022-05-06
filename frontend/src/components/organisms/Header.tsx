import { Link } from "react-router-dom"

export const Header = () => {
	return (
		<>
			<div style={{display: "flex", gap: "0px 2rem", marginBottom: "20px"}}>
				<Link to="/">TOPページ</Link>
				<Link to="/posts">投稿一覧ページ</Link>
			</div>
		</>
	)
}