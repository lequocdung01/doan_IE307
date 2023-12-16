import React from 'react'
import { useEffect, useState } from 'react';
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
const upload = 'cloud-upload';
const checkmark = 'checkmark';

const AddDishes = ({ navigation }) => {
  const [foodName, setFoodName] = useState("")
  const [foodPhoto, setFoodPhoto] = useState('')
  // const [materialPhoto, setMaterialPhoto] = useState("")
  const [foodProcessing, setFoodProcessing] = useState("")
  const [foodIngredients, setFoodIngredients] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [feel, setFeel] = useState("")
  const [foodRations, setFoodRations] = useState("")
  const [inputHeight, setInputHeight] = useState(80); // Độ cao mặc định của TextInput
  const [modal, setModal] = useState(false)
  const [dsloaihoa, getdslh] = useState()

  const _submitData = () => {
    fetch("http://192.168.54.46:3000/api/postDish", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foodName: foodName,
        foodPhoto: foodPhoto,
        // materialPhoto: materialPhoto,
        foodProcessing: foodProcessing,
        foodIngredients: foodIngredients,
        cookingTime: cookingTime,
        feel: feel,
        foodRations: foodRations,
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log("error", err)
      })
  }

  const _uploadImage = async () => {
    const options = {
      base64: true,
      quality: 1,
    }
    const file = await ImagePicker.launchImageLibraryAsync(options)
    if (!file.canceled) {
      handleUpdata(file.assets[0])
    }
  }


  const _takePhoto = async () => {
    const options = {
      base64: true,
      quality: 1,
    }
    const file = await ImagePicker.launchCameraAsync(options)
    if (!file.canceled) {
      handleUpdata(file.assets[0])
    }
  }

  const handleUpdata = async (image) => {
    const data = new FormData()
    data.append('file', `data:image/jpg;base64,${image.base64}`)
    data.append('api_key', '245216386178123')
    data.append("upload_preset", "foodPhotos")
    data.append("folder", "FoodIE307")
    data.append("cloud_name", "dndvr8ko9")
    const res = await fetch("https://api.cloudinary.com/v1_1/dndvr8ko9/image/upload", {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    const picture_url = (await res.json()).secure_url
    setFoodPhoto(picture_url)
    setModal(false)
  }


  const getapiloaihoa = async () => {
    try {
      const response = await axios.get(
        'http://192.168.54.46:3000/api/getAllDish');
      getdslh(response.data);
    } catch (error) {
      // handle err
      alert(error.message);
    }
  };
  useEffect(() => {
    getapiloaihoa();
  }, []);



  // const deleteEmployee = () => {
  //   fetch("http://192.168.137.1:3000/delete", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: _id
  //     })
  //   }).then(res => res.json())
  //     .then(deleteEmp => {
  //       Alert.alert(`${deleteEmp.name} delete Success!`)
  //     }).catch(err => {
  //       console.log("ERROR", err)
  //     })
  // }

  // const AlertDelete = (id) =>

  //   Alert.alert(
  //     "Alert Title",
  //     "Delete Employee?",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => deleteEmployee() }
  //     ],
  //     { cancelable: false }
  //   );


  const handleDelete = async(id)=>{
    console.log(id)
    const data = await axios.delete('http://192.168.54.46:3000/api/delete/'+id)
    
      if(data.data.success){
        getapiloaihoa()
        alert(data.data.message)
      }
  }
  // const handleDelete = async (id) => {
  //   try {
  //     const data = await axios.get(
  //       'http://192.168.137.1:3000/api/delete'+id);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
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
          <TouchableOpacity onPress={() => _submitData()}>
            <Text style={styles.text_pushFood}>Lên Sóng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.introduce}>
        <TouchableOpacity style={styles.upload_image} mode="contained"
          onPress={() => _uploadImage()}>
          <Icon name={foodPhoto == "" ? upload : checkmark} size={50}></Icon>
          <Text>Chọn ảnh</Text>
          <Image source={{ url: foodPhoto }} style={styles.image} />
        </TouchableOpacity>

        <TextInput placeholder='Tên món ăn' style={styles.input_name} onChangeText={text => setFoodName(text)} />
        <TextInput placeholder='Cảm nghĩ về món ăn!Tại sao lại muốn ăn món ăn này?...'
          style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
          multiline
          numberOfLines={1}
          onContentSizeChange={(e) =>
            handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
          }
          onChangeText={text => setFeel(text)}
        />
        <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Khẩu phần</Text>
          <TextInput placeholder='2 người' style={styles.input_Ration}
            onChangeText={text => setFoodRations(text)} />
        </View>
        <View style={styles.Ration}>
          <Text style={styles.text_Ration}>Thời gian nấu</Text>
          <TextInput placeholder='1 giờ 30 phút' style={styles.input_Ration}
            onChangeText={text => setCookingTime(text)} />
        </View>
      </View>
      <View style={styles.introduce}>
        <Text style={styles.Ingredient}>Nguyên liệu</Text>
        <View style={styles.Ingredient_items}>
          <TextInput placeholder='250g bột' style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
            multiline
            numberOfLines={1}
            onContentSizeChange={(e) =>
              handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
            }
            onChangeText={text => setFoodIngredients(text)}
          />
        </View>
        <TouchableOpacity style={styles.add_Ingredient}>
          <Text style={styles.text_add_Ingredient}>+ Nguyên liệu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.introduce}>
        <Text style={styles.Ingredient}>Cách làm</Text>
        <View style={styles.Ingredient_items}>
          <TextInput placeholder='Bước 1' style={[styles.input_Ingredient, { height: Math.max(80, inputHeight) }]}
            multiline
            numberOfLines={1}
            onContentSizeChange={(e) =>
              handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
            }
            onChangeText={text => setFoodProcessing(text)}
          />
        </View>
        <TouchableOpacity style={styles.add_Ingredient}>
          <Text style={styles.text_add_Ingredient}>+ Nguyên liệu</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      scrollEnabled={false}
        data={dsloaihoa}
        renderItem={({ item }) => (
          <View>
            <Text >{item.foodProcessing} </Text>
            <Text>{item._id}</Text>
            <TouchableOpacity onPress={() => handleDelete(item._id)}><Text>X</Text></TouchableOpacity>
          </View>
        )}
      />
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
  upload_image: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  input_name: {
    backgroundColor: '#A2CD5A',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    paddingLeft: 15,
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
    marginLeft: 15,
  },
  Ingredient_items: {
    marginRight: 15,
    marginTop: 15,
  },
  input_Ingredient: {
    marginTop: 5,
    marginLeft: 15,
    paddingLeft: 20,
    backgroundColor: '#A2CD5A',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    width: 330,
    fontSize: 18,
  },
  add_Ingredient: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  text_add_Ingredient: {
    fontSize: 20,
  },
})
export default AddDishes