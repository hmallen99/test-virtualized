import React from "react"
import { View } from "react-native-web"
import { FixedSizeList as List } from "react-window"

const initialList = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ]


function ReactWindowExample() {
	const [list, setList] = React.useState(initialList)
	const loadNextPage = () => {
		setList((oldList) => {
			return oldList.concat([
				"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"
			])
		})
	}

	return (
		<div>
			<List
				height={150}
				itemCount={list.length}
				itemSize={35}
				layout={"horizontal"}
				direction={"rtl"}
				width={300}>
					{
						({ index, style }) => {
							if (list.length - index < 20) {
								loadNextPage()
							}
							return (
								<div style={style}>{list[index]}</div>
							)
						}
					}
			</List>
		</div>
	)
}

export default ReactWindowExample
