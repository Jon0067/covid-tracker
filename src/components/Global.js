import React from 'react';
import {StyleSheet,View, Text, FlatList} from 'react-native';

class Global extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
					{
					     id:1,
					     status:'confirm',
					     value:3754650
					},
			],
			refreshing: false
		}
}

renderItem = ({ item }) => (
	<View style={{flex :3 , flexDirection:"row"}}>
		<Text style={styles.Positif}>{item.status}: {item.value}</Text>
	</View>
)

onRefresh = () => {
	this.state({ refreshing:true})
}

render(){
		
		return(
			<View>
				<FlatList
					data={this.state.data}
					keyExtractor={item => item.id.toString()}
					renderItem={this.renderItem}
					refreshing={this.state.refreshing}
					onRefresh={()=> { }}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  Positif:{
    backgroundColor:'orange',
    width:'auto'
  },
});

export default Global;