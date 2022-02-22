import React from "react";
import ReactVirtualizedExample from "./ReactVirtualizedExample"
import ReactWindowExample from './ReactWindowExample'
import ReactNativeWebExample from './ReactNativeWebExample';

function Container({ version }) {
	if(version === 0) {
		return (
			<div>
				<h1>React-Virtualized</h1>
				<ReactVirtualizedExample />
			</div>
		)
	}
	if(version === 1) {
		return (
			<div>
        <h1>React-Window</h1>
        <ReactWindowExample />
      </div>
		)
	}
	return (
		<div>
			<h1>React Native Web</h1>
			<div style={{width: 400, float: 'left'}}>
				<ReactNativeWebExample inverted={true} horizontal={false}/>
			</div>
			<div style={{width: 400, float: 'right'}}>
				<ReactNativeWebExample inverted={false} horizontal={true}/>
			</div>
		</div>
	)

}

export default Container;
