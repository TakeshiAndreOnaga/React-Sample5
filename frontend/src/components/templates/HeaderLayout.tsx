import { ReactNode } from "react"
import { Header } from "../organisms/Header"

type Props = {
	children: ReactNode;
}

export const HeaderLayout = (props: Props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	)
}