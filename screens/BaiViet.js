import React, { useState } from 'react';
import { Text, TextInput, View, ImageBackground, Image, Button, ScrollView ,TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const postsData  = [
  {
    id: 1,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU',
    userName: 'Cuong',
    postText: 'Vịt tiềm thuốc bắc',
    contenImange: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/03/sapa-ruong-bac-thang.jpg',
    type: 'Luộc',
    love: 123,
    faceWithSave: 456,
    clap: 123,
    on: false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  },
  {
   
    id: 2,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF3vr0emxdWSmRLtu1y56JdbSpDkZRW7aiw&usqp=CAU',
    userName: 'Bé Heo',
    postText: 'Cơn lốc dữ dội',
    type: 'Nướng',
    contenImange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQldJbeEwXK66_0zxbrA1CymFRhmscebCsg&usqp=CAU',
    love: 45,
    faceWithSave: 15,
    clap: 12,
    on:false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  },
  {
   
    id: 3,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU',
    userName: 'Trứng rán',
    postText: 'Hươu cao cổ dễ thương 🥰',
    contenImange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYjIrX9CUBHXMAz9aohxmzVklCNtAuCZzKg&usqp=CAU',
    type: 'Xào',
    love: 120,
    faceWithSave: 506,
    clap: 125,
    on:false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  },
  {
   
    id: 4,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU',
    userName: 'Trứng rán',
    postText: 'Hươu cao cổ dễ thương 🥰',
    contenImange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYjIrX9CUBHXMAz9aohxmzVklCNtAuCZzKg&usqp=CAU',
    type: 'Xào',
    love: 120,
    faceWithSave: 506,
    clap: 125,
    on:false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  },
  {
   
    id: 5,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU',
    userName: 'Trứng rán',
    postText: 'Hươu cao cổ dễ thương 🥰',
    contenImange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYjIrX9CUBHXMAz9aohxmzVklCNtAuCZzKg&usqp=CAU',
    type: 'Xào',
    love: 120,
    faceWithSave: 506,
    clap: 125,
    on:false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  },
  {
   
    id: 6,
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU',
    userName: 'Trứng rán',
    postText: 'Hươu cao cổ dễ thương 🥰',
    contenImange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYjIrX9CUBHXMAz9aohxmzVklCNtAuCZzKg&usqp=CAU',
    type: 'Xào',
    love: 120,
    faceWithSave: 506,
    clap: 125,
    on:false,
    festival:"🥳 Vui tiệc tại nhà 🎊🏠"
  }
  
]
export default function BaiViet({navigation}) {
  const [posts, setPosts] = useState([...postsData]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textH3}>Cải làn xào thịt bò</Text>
        <View>
              <View style={styles.post}>
                <View style={styles.headerPost}>
                    <View style={styles.postHead}>  
                    <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'}}/>
                    <Text style={styles.text}>Meo</Text>
                    </View>
                </View>
              </View>
        </View>
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.textButton}> <Icon style={styles.iconButton} name={"bookmark-outline"} color={'#000'} size={15} /> Lưu</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Nguyên Liệu</Text>
          <Text style = {styles.textH5NL}>1 bó rau cải làn</Text>
          <Text style = {styles.textH5NL}>250 gr thịt bò</Text>
          <Text style = {styles.textH5NL}>2 tép tỏi</Text>
          <Text style = {styles.textH5NL}>Gia vị: mì chính, hạt nêm</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <Text style={styles.textH3}>Cách Làm</Text>
          <View style={styles.contentMake}>
            <Text style={styles.numberText}>1</Text>
            <Text style={styles.textH5}>Thịt bò thái miếng vừa ăn, ướp thịt bò với 1/2 thìa cafe mì chính, 1/3 thìa cafe hạt nêm, ướp 10p cho ngắm</Text>
          </View>
          <View style={styles.contentMake}>
            <Text style={styles.numberText}>2</Text>
            <Text style={styles.texth5}>Cải làn nhặt bỏ lá già, tước vỏ thân sau đó cắt khúc vừa ăn, rửa sạch để ráo nước</Text>
          </View>
          <View style={styles.contentMake}>
            <Text style={styles.numberText}>3</Text>
            <Text style={styles.textH5}>
              Tỏi bóc vỏ, đập dập, băm nhỏ, cho dầu ăn vào chảo, khi dầu nóng già cho thịt bò vào xào sơ đến khi chín rái thì tắt bếp, đổ ra bát riêng, bật bếp, cho rau cải làn vào xào, đổ nước thịt bò vào xào rau đến khi rau chín tái thì cho thịt bò vào đảo đều, nêm lại gia vị vừa ăn, xào đến khi rau chín tới thì tắt bếp, múc rau ra đĩa rồi ăn nóng
            </Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
          <View>
            <Text style={styles.textH3}>Thông tin người dùng</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
            <View style={styles.headCooksnap}>
              <Text style={styles.textH3}> <Icon style={styles.icon} name={"bookmark-outline"} color={'#000'} size={15} /> Cooksnap</Text>
            </View>
            <Text style={styles.textH5}>Bạn đã làm theo món này phải không? Hãy chia sẻ hình món bạn đã nấu nhé!</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Gửi cooksnap</Text>
            </TouchableOpacity>
            <Text style={styles.texth6}>Tìm hiểu thêm vào cooksnap</Text>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
            <Text style={styles.textH3}>Bình Luận</Text>
            <View style={styles.comment}>
              <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxAEiAK9CBh_Cxi6E5_k_atIuwrHYTRHLNA&usqp=CAU'}}/>
              <TextInput
                placeholder="Thêm bình luận"
                style={styles.textInput}
                textAlignVertical="top"
              />
            </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <View>
              <Text style={styles.textH3}>Món mới của Meo</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginLeft:5,
  },
  
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    
  },
  textH3:{
    fontSize:20,
    fontWeight:"500",
    marginBottom:15,
  },
  textH5:{
    marginBottom:10,
  },
  textH5NL:{
    marginBottom:10,
    paddingBottom:10,
    borderBottomWidth:2,
    borderStyle: 'dotted',
  },
  postHead:{
    flexDirection:"row",
    marginLeft:5,
  },
  button:{
    backgroundColor:"lightblue",
    height:30,
    padding:5,
    borderRadius:5,
    margin:8
  },
  textButton:{
    fontSize:15,
    marginLeft:110
  },
  iconButton:{
    marginTop:2
  },
  contentMake:{
    flexDirection:"row",
    padding: 5,

  },
  numberText:{
    backgroundColor:"black",
    color:"white",
    fontSize:12,
    margin:5,
    paddingBottom:7,
    paddingLeft:5,
    paddingRight:5,
    width:25,
    height:20,
    borderRadius:50,
  },
  headCooksnap:{
    flexDirection:"row",
  },
  texth6:{
    fontSize:12,
    textDecorationLine: 'underline',
    textAlign:"center",
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    borderRadius:50,
    marginRight:5,
  },
  textInput:{
    width: 250,
    height: 30,
    borderColor:'black',
    borderWidth:1,
    padding: 10,
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
    borderRadius:15,
    
  },
  comment:{
    flexDirection:"row",
    marginLeft:5,
  },
});
