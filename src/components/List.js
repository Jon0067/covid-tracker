import React from 'react';
import {View, Text, FlatList} from 'react-native';

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[],
			refreshing:false
		}
}

renderItem = ({item}) => (
	<View style={{padding: 20, borderBottomWidth:1, borderBottomColor:'#000'}}>
		<Text>Name : {item.name.first}</Text>
	</View>
)

onRefresh = () => {
	this.getDataApi();
}

componentDidMount = () => {
	this.getDataApi();
}

getDataApi = async () => {
	this.setState({refreshing:true})
	/// fetch('http://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(json => this.setState({users: json, refreshing: false}))
	const response = await fetch('https://api.randomuser.me/?results=5')
	const json = await response.json();
	this.setState({data: json, refreshing: false})
}

render(){
		console.log(this.state.users);
		return(
			<View>
				<FlatList
					data={this.state.data}
					keyExtractor={item => item.login.uuid.toString()}
					renderItem={this.renderItem}
					refreshing={this.state.refreshing}
					onRefresh={()=> { }}
				/>
			</View>
		)
	}
}

export default List;