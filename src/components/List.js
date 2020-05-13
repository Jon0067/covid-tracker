import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

class List extends React.Component{
	constructor(){
		super();
		this.state = {
			province:[],
			refreshing:false
		}
		//keyExtractorCovid=(_, index) => index.toString()
}

renderItem = ({ item }) => (
	<View style={{flex : 1 ,padding: 10, borderBottomWidth:1, borderBottomColor:'#000'}}>
		<Text>{item.provinsi} </Text>
		<View style={{flexDirection:'row'}}>
			<Text style={styles.Positif}>{item.kasusPosi} </Text>
			<Text style={styles.sembu}>{item.kasusSemb}</Text>
			<Text style={styles.Meninggal}>{item.kasusMeni}</Text>
		</View>
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
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const json = await response.json()
        this.setState({province: json.data,refreshing:false})
}

render(){
		console.log(this.state.users);
		return(
			<View>
				<FlatList
					data={this.state.province}
                    keyExtractor={({provinsi}, index) => provinsi}
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
    width:45
  },
  Positif:{
    backgroundColor:'orange',
    width:45
  },
  Meninggal:{
    backgroundColor:'gray',
    width:45
  },
});

export default List;