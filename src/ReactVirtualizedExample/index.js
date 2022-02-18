import React from "react"
import InfiniteScroller from "./InfiniteScroller"

const initialList = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ]

function ReactVirtualizedExample() {
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
			<InfiniteScroller
				hasNextPage={true}
				isNextPageLoading={false}
				list={list}
				loadNextPage={loadNextPage}
			/>
		</div>
	)
}

export default ReactVirtualizedExample
