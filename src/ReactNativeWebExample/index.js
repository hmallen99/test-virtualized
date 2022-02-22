import React from 'react'
import { VirtualizedList, View } from 'react-native-web'

const itemStyle = {
	backgroundColor: '#f9c2ff',
	height: 150,
	justifyContent: 'center',
	marginVertical: 8,
	marginHorizontal: 16,
	padding: 20,
}

const Item = ({ title }) => (
	<View style={itemStyle}>
		<h1>{title}</h1>
	</View>
)

const containerStyle = {
	height: 400,
	flex: 1
}



function ReactNativeWebExample ({inverted, horizontal}) {
	const [dataList, setDataList] = React.useState([
		"a",
		"b",
		"c",
		"d",
	])

	const getItemCount = (data) => data.length;

	const getItem = (data, index) => {
		return ({
			id: Math.random().toString(12).substring(0),
			title: `Item ${data[index]} ${index+1}`
		})
	}

	return (
		<View style={containerStyle}>
			<VirtualizedList
				data={dataList}
				initialNumToRender={4}
				renderItem={({ item }) => <Item title={item.title} />}
				getItemCount={getItemCount}
				getItem={getItem}
				onEndReachedThreshold={0.01}
				inverted={inverted}
				horizontal={horizontal}
				onEndReached={(info) => {
						console.log(info)
						setDataList((oldList) => {
							return oldList.concat([
								"a",
								"b",
								"c",
								"d",
							])
						})
				}}
			/>
		</View>
	)
}

export default ReactNativeWebExample;
