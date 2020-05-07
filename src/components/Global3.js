import React from 'react';
import {StyleSheet,View, Text, FlatList} from 'react-native';

class Global3 extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
					{
					  	id:3,
					     status:'death',
					     value:263861   
					},
			],
			refreshing: false
		}
}

renderItem = ({ item }) => (
	<View style={{flex :3 , flexDirection:"row"}}>
		<Text style={styles.Meninggal}>{item.status}: {item.value}</Text>
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
  Meninggal:{
    backgroundColor:'gray',
    width:120
  },
});

export default Global3;