import React from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput,Image, FlatList,SectionList } from 'react-native';

const postdata = [
    {
        id:1,
        menuImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        name: 'tom hum'
    },
    {
        id:2,
        menuImage:'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        name: 'Bào ngư'
    },
    {
        id:3,
        menuImage:'https://assets.unileversolutions.com/v1/1187507.jpg',
        name: 'Vây cá'
    },
    {
        id:4,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
        name: 'Cá ngừ đại dương'
    },
    {
        id:5,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
        name: 'Vây cá voi'
    },
    {
        id:6,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:7,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:8,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:9,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:10,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:11,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
    {
        id:12,
        menuImage:'https://cdn.tgdd.vn/Files/2019/03/07/1153472/anh-sang_600x800.jpg',
    },
]
const renderImage =({item})=>(
    <View style={styles.ImageContainer}>
        <Image source={{ uri: item.menuImage }} style={styles.Image} />
        <View style={styles.brText}>
           <Text style={styles.nameImage} >{item.name} </Text>
        </View>
    </View>

)
const Search=()=>{
return (
<View style={styles.container}>
    <View style={styles.search}>
        <TextInput style={styles.searchInput}
        placeholder='Gõ vào nguyên liệu hoặc món cần tìm'
        />
    </View>
    <View style={styles.menu}>
        <Text style={styles.textMenu}>Món tìm kiếm phổ biển hôm nay</Text>
        <FlatList 
        style={styles.flatList}
        data={postdata}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={'flatlist_key'}
        />
    </View>
</View>
)
}
const styles = StyleSheet.create({
    container:{
        marginTop:50,
        backgroundColor:'#DDDDDD',
    },
    search:{
        backgroundColor:'#FFFFFF',
        height:80,
    },
    searchInput:{
        marginTop:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#DDDDDD',
        borderRadius:15,
        paddingLeft:15,
        paddingRight:20,
        height:50,
    },
    menu:{
        marginTop:5,
        backgroundColor:'#FFFFFF',
        paddingBottom:10,
    },
    textMenu:{
        fontSize:20,
        marginTop:15,
        marginBottom:15,
        marginLeft:15,
    },
    ImageContainer:{
        flex:1,
        // position:'relative',
    },
    Image:{
        height:110,
        width:175,
        borderRadius:8,
        marginBottom:10,
        marginRight:10,
    },
    menuImage:{
        marginLeft:15,
    },
    flatList:{
        height:475,
        marginLeft:15,
    },
    brText:{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#BBBBBB',
        elevation:1,
        borderRadius:8,
        width:175,
    },
    nameImage:{
        fontSize: 20,
        paddingLeft:5,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})