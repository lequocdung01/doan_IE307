import React from 'react'
import { useState } from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const AddDishes = ({ navigation }) => {
    const [inputHeight, setInputHeight] = useState(40); // Độ cao mặc định của TextInput

   const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Thiết lập độ cao của TextInput dựa trên chiều cao nội dung mới
    setInputHeight(contentHeight);
   };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='chevron-back-outline' style={{ fontSize: 40, paddingLeft: 10 }} />
                </TouchableOpacity>
                <View style={styles.pushFood}>
                    <TouchableOpacity>
                        <Text style={styles.text_pushFood}>Lên Sóng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.introduce}>
                <Text>Chọn ảnh</Text>
                <TextInput placeholder='Tên món ăn' style={styles.input_name} />
                <TextInput placeholder='Cảm nghĩ về món ăn!Tại sao lại muốn ăn món ăn này?...' style={styles.input_name} />
                <View style={styles.Ration}>
                    <Text style={styles.text_Ration}>Khẩu phần</Text>
                    <TextInput placeholder='2 người' style={styles.input_Ration}/>
                </View>
                <View style={styles.Ration}>
                    <Text style={styles.text_Ration}>Thời gian nấu</Text>
                    <TextInput placeholder='1 giờ 30 phút' style={styles.input_Ration} />
                </View>
            </View>
            <View style={styles.introduce}>
                <Text style={styles.Ingredient}>Nguyên liệu</Text>
                <View style={styles.Ingredient_items}>
                <TextInput placeholder='250g bột' style={styles.input_Ingredient} 
                multiline
                numberOfLines={1}
                onContentSizeChange={(e) =>
                    handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
                  }
                />
                <TouchableOpacity>
                    <Text style={styles.text_dle}>X</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.Ingredient_items}>
                <TextInput placeholder='100 ml nước' style={styles.input_Ingredient} 
                multiline
                numberOfLines={1}
                onContentSizeChange={(e) =>
                    handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
                  }
                />
                <TouchableOpacity>
                    <Text style={styles.text_dle}>X</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.add_Ingredient}>
                    <Text style={styles.text_add_Ingredient}>+ Nguyên liệu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.introduce}>
                <Text style={styles.Ingredient}>Cách làm</Text>
                <View style={styles.Ingredient_items}>
                <TextInput placeholder='250g bột' style={styles.input_Ingredient} 
                multiline
                numberOfLines={1}
                onContentSizeChange={(e) =>
                    handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
                  }
                />
                <TouchableOpacity>
                    <Text style={styles.text_dle}>X</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.Ingredient_items}>
                <TextInput placeholder='100 ml nước' style={styles.input_Ingredient} 
                multiline
                numberOfLines={1}
                onContentSizeChange={(e) =>
                    handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
                  }
                />
                <TouchableOpacity>
                    <Text style={styles.text_dle}>X</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.add_Ingredient}>
                    <Text style={styles.text_add_Ingredient}>+ Nguyên liệu</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        paddingTop: 50,
        paddingBottom: 15,
    },
    pushFood: {
        marginLeft: 220,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        backgroundColor: '#B8B8B8',
        borderRadius: 10,
    },
    text_pushFood: {
        fontSize: 18,
    },
    input_name: {
        backgroundColor: '#DCDCDC',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    introduce: {
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        marginBottom: 15,
    },
    Ration: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginRight: 15,
        marginLeft: 15,
    },
    text_Ration: {
        fontSize: 18,
    },
    input_Ration: {
        marginLeft: 15,
        paddingLeft: 20,
        backgroundColor: '#A2CD5A',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 190,
    },
    Ingredient: {
        fontSize: 18,
        marginLeft:15,
    },
    Ingredient_items:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight:15,
        marginTop:15,
    },
    input_Ingredient: {
        marginTop: 5,
        marginLeft: 15,
        paddingLeft: 20,
        backgroundColor: '#A2CD5A',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        width: 300,
    },
    text_dle:{
        fontSize:30,
    },
    add_Ingredient:{
        marginTop:25,
        marginBottom:20,
        alignItems: 'center',
    },
    text_add_Ingredient:{
        fontSize:20,
    },
})
export default AddDishes