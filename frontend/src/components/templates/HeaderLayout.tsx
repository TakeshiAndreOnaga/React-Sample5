import { ReactNode, useState } from "react"
import { Header } from "../organisms/Header"

type Props = {
	children: ReactNode;
}

export const HeaderLayout = (props: Props) => {
	const [ count, setCount ] = useState<number>(0);

	const handleOnClick = () => {
		setCount(count + 1);
	}

	console.log("HeaderLayout");

	return (
		<>
			<Header />
			<h4>count数：{count}</h4>
			<button onClick={handleOnClick}>カウント</button>
			{props.children}
		</>
	)
}