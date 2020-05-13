import React from 'react';
import {StyleSheet,View, Text, FlatList} from 'react-native';
 
class Global2 extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
					{
					  	id:2,
					     status:'recovered',
					     value:1246184   
					},
			],
			refreshing: false
		}
}
 
renderItem = ({ item }) => (
	<View style={{flex :3 , flexDirection:"row",borderRightWidth:2,borderLeftWidth:2, borderLeftColor:'#000'}}>
		<Text style={styles.sembu}>{item.status}: {item.value} </Text>
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
  sembu: {
    backgroundColor:'limegreen',
    width:'auto'
  },
});

export default Global2;
