import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

class List2 extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
		{
		     fid:11,
			 kodeProvi:31,
			 provinsi:"DKI Jakarta",
			 kasusPosi:4539,
			 kasusSemb:632,
			 kasusMeni:408
		},
		{
		     fid:12,
			 kodeProvi:32,
			 provinsi:"Jawa Barat",
			 kasusPosi:1252,
			 kasusSemb:159,
			 kasusMeni:86
		},
		{
		     fid:15,
			 kodeProvi:35,
			 provinsi:"Jawa Timur",
			 kasusPosi:1124,
			 kasusSemb:178,
			 kasusMeni:117
		},
		{
		     fid:13,
			 kodeProvi:33,
			 provinsi:"Jawa Tengah",
			 kasusPosi:798,
			 kasusSemb:112,
			 kasusMeni:62
		},
		{
		     fid:27,
			 kodeProvi:73,
			 provinsi:"Sulawesi Selatan",
			 kasusPosi:607,
			 kasusSemb:199,
			 kasusMeni:40
		},
		{
		     fid:16,
			 kodeProvi:36,
			 provinsi:"Banten",
			 kasusPosi:446,
			 kasusSemb:34,
			 kasusMeni:41
		},
		{
		     fid:17,
			 kodeProvi:51,
			 provinsi:"Bali",
			 kasusPosi:271,
			 kasusSemb:159,
			 kasusMeni:4
		},
		{
		     fid:18,
			 kodeProvi:52,
			 provinsi:"Nusa Tenggara Barat",
			 kasusPosi:269,
			 kasusSemb:36,
			 kasusMeni:4
		},
		{
		     fid:33,
			 kodeProvi:94,
			 provinsi:"Papua",
			 kasusPosi:240,
			 kasusSemb:48,
			 kasusMeni:6
		},
		{
		     fid:3,
			 kodeProvi:13,
			 provinsi:"Sumatera Barat",
			 kasusPosi:203,
			 kasusSemb:37,
			 kasusMeni:15
		},
		{
		     fid:22,
			 kodeProvi:63,
			 provinsi:"Kalimantan Selatan",
			 kasusPosi:198,
			 kasusSemb:24,
			 kasusMeni:9
		},
		{
		     fid:6,
			 kodeProvi:16,
			 provinsi:"Sumatera Selatan",
			 kasusPosi:185,
			 kasusSemb:43,
			 kasusMeni:5
		},
		{
		     fid:21,
			 kodeProvi:62,
			 provinsi:"Kalimantan Tengah",
			 kasusPosi:180,
			 kasusSemb:15,
			 kasusMeni:7
		},
		{
		     fid:23,
			 kodeProvi:64,
			 provinsi:"Kalimantan Timur",
			 kasusPosi:167,
			 kasusSemb:13,
			 kasusMeni:1
		},
		{
		     fid:24,
			 kodeProvi:65,
			 provinsi:"Kalimantan Utara",
			 kasusPosi:130,
			 kasusSemb:5,
			 kasusMeni:1
		},
		{
		     fid:2,
			 kodeProvi:12,
			 provinsi:"Sumatera Utara",
			 kasusPosi:129,
			 kasusSemb:41,
			 kasusMeni:13
		},
		{
		     fid:14,
			 kodeProvi:34,
			 provinsi:"Daerah Istimewa Yogyakarta",
			 kasusPosi:115,
			 kasusSemb:50,
			 kasusMeni:7
		},
		{
		     fid:10,
			 kodeProvi:21,
			 provinsi:"Kepulauan Riau",
			 kasusPosi:92,
			 kasusSemb:42,
			 kasusMeni:9
		},
		{
		     fid:20,
			 kodeProvi:61,
			 provinsi:"Kalimantan Barat",
			 kasusPosi:73,
			 kasusSemb:8,
			 kasusMeni:3
		},
		{
		     fid:28,
			 kodeProvi:74,
			 provinsi:"Sulawesi Tenggara",
			 kasusPosi:64,
			 kasusSemb:11,
			 kasusMeni:2
		},
		{
		     fid:26,
			 kodeProvi:72,
			 provinsi:"Sulawesi Tengah",
			 kasusPosi:59,
			 kasusSemb:11,
			 kasusMeni:3
		},
		{
		     fid:4,
			 kodeProvi:14,
			 provinsi:"Riau",
			 kasusPosi:58,
			 kasusSemb:26,
			 kasusMeni:6
		},
		{
		     fid:9,
			 kodeProvi:18,
			 provinsi:"Lampung",
			 kasusPosi:54,
			 kasusSemb:17,
			 kasusMeni:5
		},
		{
		     fid:32,
			 kodeProvi:82,
			 provinsi:"Maluku Utara",
			 kasusPosi:50,
			 kasusSemb:5,
			 kasusMeni:0
		},
		{
		     fid:25,
			 kodeProvi:71,
			 provinsi:"Sulawesi Utara",
			 kasusPosi:45,
			 kasusSemb:17,
			 kasusMeni:4
		},
		{
		     fid:30,
			 kodeProvi:76,
			 provinsi:"Sulawesi Barat",
			 kasusPosi:44,
			 kasusSemb:4,
			 kasusMeni:1
		},
		{
		     fid:34,
			 kodeProvi:91,
			 provinsi:"Papua Barat",
			 kasusPosi:43,
			 kasusSemb:0,
			 kasusMeni:1
		},
		{
		     fid:5,
			 kodeProvi:15,
			 provinsi:"Jambi",
			 kasusPosi:38,
			 kasusSemb:1,
			 kasusMeni:0
		},
		{
		     fid:31,
			 kodeProvi:81,
			 provinsi:"Maluku",
			 kasusPosi:23,
			 kasusSemb:12,
			 kasusMeni:0
		},
		{
		     fid:35,
			 kodeProvi:0,
			 provinsi:"Indonesia",
			 kasusPosi:22,
			 kasusSemb:0,
			 kasusMeni:0
		},
		{
		     fid:8,
			 kodeProvi:19,
			 provinsi:"Kepulauan Bangka Belitung",
			 kasusPosi:19,
			 kasusSemb:4,
			 kasusMeni:1
		},
		{
		     fid:29,
			 kodeProvi:75,
			 provinsi:"Gorontalo",
			 kasusPosi:15,
			 kasusSemb:2,
			 kasusMeni:1
		},
		{
		     fid:1,
			 kodeProvi:11,
			 provinsi:"Aceh",
			 kasusPosi:12,
			 kasusSemb:7,
			 kasusMeni:1
		},
		{
		     fid:7,
			 kodeProvi:17,
			 provinsi:"Bengkulu",
			 kasusPosi:12,
			 kasusSemb:1,
			 kasusMeni:1
		},
		{
		     fid:19,
			 kodeProvi:53,
			 provinsi:"Nusa Tenggara Timur",
			 kasusPosi:10,
			 kasusSemb:1,
			 kasusMeni:0
		}
	],
			refreshing: false
		}
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
	this.state({ refreshing:true})
}

render(){
		
		return(
			<View>
				<FlatList
					data={this.state.data}
					keyExtractor={item => item.fid.toString()}
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

export default List2;