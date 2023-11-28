import React from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const postdata = [
    {
        id: 1,
        menuImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        menuImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        menuImage3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueae2dB4D2UU5FxZmTTyGBr6MTKqmTfGD5g&usqp=CAU',
        name: 'Vui Tiệc Tại Gia',
        times: '6 thg 11 - 4 thg 12',
        number_of_dishes: '16 món lên sóng',
        nameFood1: 'tom hum aaa aaa aaaa aaaa',
        nameFood2: 'tom hum',
        nameFood3: 'tom hum',

    },
    {
        id: 2,
        menuImage1: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        menuImage2: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        menuImage3: 'https://chuphinhmonan.com/wp-content/uploads/2017/03/dakgalbi-1-2.jpg',
        name: 'Vui Tiệc Tại Gia',
        times: '6 thg 11 - 4 thg 12',
        number_of_dishes: '16 món lên sóng',
        nameFood1: 'bào ngư',
        nameFood2: 'bào ngư',
        nameFood3: 'bào ngư',
    },
    {
        id: 3,
        menuImage1: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        menuImage2: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        menuImage3: 'https://assets.unileversolutions.com/v1/1187507.jpg',
        name: 'Vây cá',
    },
]
const renderImage = ({ item }) => (
    <View style={styles.ImageContainer}>
        <Text style={styles.text_name}>{item.name}</Text>
        <Text style={styles.text_times}>{item.times}</Text>
        <Text style={styles.text_number_of_dishes}>{item.number_of_dishes}</Text>
        <View style={styles.food}>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage1 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood1}</Text>
            </View>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage2 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood2}</Text>
            </View>
            <View style={styles.food_item}>
                <Image source={{ uri: item.menuImage3 }} style={styles.Image} />
                <Text style={styles.text_nameFood}>{item.nameFood3}</Text>
            </View>
        </View>
    </View>

)

const Storages = ({ navigation }) => {
    const numberOfItemsToShow = 3;
    return (
        <View style={styles.container}>
            <View style={styles.titler_container}>
                <Image source={{ uri: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/WP/TS/XB/27732288/product-jpeg.jpg' }} style={styles.logo} />
                <Text style={styles.text_title}>Lưu trữ ghi chú vào bếp của bạn</Text>
                <View>
                    <TouchableOpacity style={styles.add_items} onPress={() => navigation.navigate('AddDishes')}>
                        <Text style={styles.text_add_items}>Món mới</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.text_item}>Tham gia thử thách vào bếp </Text>
                <FlatList
                    initialNumToRender={3}
                    data={postdata.slice(0, numberOfItemsToShow)}
                    style={styles.flatList}
                    // data={postdata}
                    renderItem={renderImage}
                    keyExtractor={(item) => item.id}
                    // numColumns={3}
                    // key={'flatlist_key'}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
    },
    titler_container: {
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:30,
    },
    text_title: {
        paddingTop: 10,
        fontSize: 22,
        marginBottom: 10,
    },
    add_items: {
        backgroundColor: '#FFA500',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
    text_add_items: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    text_item:{
        fontSize:18,
        marginTop:10,
        marginLeft:15,
        marginBottom:15,
    },
    flatList: {
        height: 475,
        marginLeft: 15,
    },
    ImageContainer: {
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        height: '60%',
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 7,
        paddingBottom:10,
    },
    text_name:{
        fontSize:20 ,
        fontWeight: 'bold',
        paddingLeft: 8,
        paddingTop:10,
        paddingBottom:15,
    },
    text_times:{
        paddingLeft:8,
        paddingBottom:7,
    },
    text_number_of_dishes:{
        paddingLeft:8,
        paddingBottom:5,
    },
    food: {
        flexDirection: 'row',
    },
    food_item: {
        backgroundColor: '#EEEEEE',
        marginRight: 4,
        marginLeft: 4,
        paddingBottom: 10,
        borderRadius: 7,
        width: 100,
    },
    text_nameFood: {
        paddingLeft: 7,
        paddingRight:7,
        fontSize: 14,
        fontWeight: 'bold',
    },
    Image: {
        height: 100,
        width: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
})
export default Storages