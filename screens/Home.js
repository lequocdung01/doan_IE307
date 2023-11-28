//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView,ImageBackground,Button,FlatList,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatSL from '../components/FlastSL';
const iconName = 'bookmark-outline';
const iconUnCheck = 'checkmark-circle-outline';
const iconCheck = 'checkmark-circle';
export const NguyenLieu = [
  {
    id: '1',
    type: 'Thịt heo',
  },
  {
    id: '2',
    type: 'Thịt bò',
  },
  {
    id: '3',
    type: 'Thịt gà',
  },
  {
    id: '4',
    type: 'Rau củ',
  },
  {
    id: '5',
    type: 'Trái cây',
  },
  
];
export const CheBienMonAn = [
  {
    id: '1',
    type: 'Tất cả',
  },
  {
    id: '2',
    type: 'Luộc',
  },
  {
    id: '3',
    type: 'Hấp',
  },
  {
    id: '4',
    type: 'Nướng',
  },
  {
    id: '5',
    type: 'Ninh/Hầm',
  },
  {
    id: '6',
    type: 'Xào',
  },
  
];
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
const festival = [
  {
    festival:"🥳 Vui tiệc tại nhà 🎊🏠",
    time:"6 thg 11 - 4 thg 12"
  },
]
const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState([]);
  const [count,setCount] = useState(false);
  const [posts, setPosts] = useState([...postsData]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleOnClicklove = (postId) => {
    const updatePosts = posts.map(Post => {
        
        if (Post.id === postId && Post.on === false){
          return {
            ...Post,
            love: Post.love + 1,
            on: true,
          };
          
        }
        if (Post.id === postId && Post.on === true) {
          setCount(!count)
          return {
            ...Post,
            love: Post.love - 1,
            on:false,
          }
        }
      return Post;
    });
    setPosts(updatePosts);
  };
  const handleOnClickfaceWithSave = (postId) => {
    const updatePosts = posts.map(Post => {
      if (Post.id === postId && Post.on === false){
          return {
            ...Post,
            faceWithSave: Post.faceWithSave + 1,
            on: true,
          };
          
        }
        if (Post.id === postId && Post.on === true) {
          setCount(!count)
          return {
            ...Post,
            faceWithSave: Post.faceWithSave - 1,
            on:false,
          }
        }
      return Post;
    });
    setPosts(updatePosts);
  };
  const handleOnClickclap = (postId) => {
    const updatePosts = posts.map(Post => {
      if (Post.id === postId && Post.on === false){
          return {
            ...Post,
            clap: Post.clap + 1,
            on: true,
          };
          
        }
        if (Post.id === postId && Post.on === true) {
          setCount(!count)
          return {
            ...Post,
            clap: Post.clap - 1,
            on:false,
          }
        }
      return Post;
    });
    setPosts(updatePosts);
  };
  const toggleExerciseSelection = (exercise) => {
  // Kiểm tra nếu exercise đc nhãn đã có trong danh sách gọi thì bỏ 
  // Ngc lại, thêm vào danh sách nếu chưa có      
    setSelectedId((selectedId) => {
    if (selectedId.includes(exercise)) {
      return selectedId.filter((id) => id !== exercise);
    } else {
      return [...selectedId, exercise];
    }
  });
    
  };
    const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setData(filteredData);
  };
   
    // Hàm để đếm số lượng món trong mỗi festival
  const countItemsInFestival = (festival) => {
    return postsData.filter((post) => post.festival === festival).length;
  };

  // Tạo một mảng mới chứa thông tin về số lượng món trong từng festival
  const festivalWithItemCount = festival.map((item) => ({
    ...item,
    itemCount: countItemsInFestival(item.festival),
  }));

  // Render phần hiển thị FlatList
  const renderItem = ({ item }) => (
    <View>
      <Text>{`${item.itemCount} món đã lên sóng!`}</Text>
      
    </View>
  );
  return (
    <ScrollView style = {styles.main}>
      <View style={styles.content}>
          
          <View style={styles.container}>
        <View >
              <Text style={styles.textHeadList}>Trong tủ lạnh của bạn có gì?</Text>
              <Text>Chọn đến 2 nguyên liệu</Text>
              <FlatList
              horizontal={true}
              data = {NguyenLieu}
              showsHorizontalScrollIndicator={false}
              renderItem = { ({item}) => (
                  <TouchableOpacity  style={styles.itemList} onPress={() => toggleExerciseSelection(item.type)}>
                      <Icon style={styles.icon} name={selectedId.includes(item.type) ? iconCheck : iconUnCheck} color={'#000'} size={15} />
                      <Text style={styles.textList}>{item.type}</Text>
                    
                  </TouchableOpacity > 
              )}
              keyExtractor = {(item) => item.id}
              
            />
          </View>
          <View >
              <FlatList
              horizontal={true}
              data = {CheBienMonAn}
              showsHorizontalScrollIndicator={false}
              renderItem = { ({item}) => (
                  <TouchableOpacity  style={[styles.itemListCB, {borderBottomWidth:selectedId.includes(item.type) ? 2 : 0} ]} onPress={() => toggleExerciseSelection(item.type)}>
                    
                      <Text style={styles.textList}>{item.type}</Text>
                    
                  </TouchableOpacity > 
              )}
              keyExtractor = {(item) => item.id}
              
            />
          </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            
            {
              posts.map(Post => (
                <View style={styles.post} key={Post.id}>
                  
                  <View style={styles.headerPost}>
                    <ImageBackground source={{uri:Post.contenImange}} style={styles.postImage} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                      <View style={styles.postHead}>  
                      <Image source={{uri: Post.profileImage}} style={styles.projectImage}></Image>
                      <Text style={styles.text}>{Post.userName}</Text>
                      </View>
                      <Text style={styles.postText}>{Post.postText}</Text>
                    </ImageBackground>
                  
                  </View>
                  <View>
                    
                    <View style={styles.interactiveContainer}>
                      <View style={styles.buttonContent}>
                        <TouchableOpacity style={styles.button} onPress={()=>handleOnClicklove(Post.id)}>
                          <Text style={styles.textButton} >❤️ {Post.love}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>handleOnClickfaceWithSave(Post.id)}>
                          <Text style={styles.textButton}>😋 {Post.faceWithSave}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>handleOnClickclap(Post.id)}>
                          <Text style={styles.textButton}>👏 {Post.clap}</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.buttonContent}>
                        <TouchableOpacity style={styles.button}>
                          <Icon style={styles.icon} name={iconName} color={'#000'} size={15} />
                          <Text style={styles.textButton}>Lưu</Text>
                        </TouchableOpacity>
                      </View>
                      
                    </View>
                  </View>
                  
                </View>
                
              ))
              
            }  

        </ScrollView>
        <View>
          <TouchableOpacity style = {styles.buttonSearch}>
            <Icon style={styles.icon} name={"search"} color={'#000'} size={15} />
            <Text>Gợi ý khác</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
      {/* <View style={styles.content}>
          <View>
            <Text style={styles.textHeadList}>Bạn đang thèm gì?</Text>
            <Text>Không chắc? Tiếp tục tạo bất ngờ</Text>
          </View>
          <View style={styles.row}>
            <FlatSL
              row = {4}
              data = {postsData}
              columns = {2}
            />
            
          </View>
          <TouchableOpacity style = {styles.buttonSearch}>
            <Icon style={styles.icon} name={"search"} color={'#000'} size={15} />
            <Text>Tạo bất ngờ cho tôi!</Text>
          </TouchableOpacity>
      </View> */}
      {/* <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Khám phá xem thứ gì đang trong mùa nào!</Text>
          
            <View style={styles.row}>
            
                <FlatList
                  data = {postsData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem = { ({item}) => (
                      <TouchableOpacity  style={styles.itemListDiscover} >
                          <ImageBackground source={{uri:item.contenImange}} style={styles.postImageThem} imageStyle={{ borderRadius: 15}}> 
                            <Text style={styles.textListThem}>{item.type}</Text>
                          </ImageBackground>

                              <FlatSL row = {"3"} data = {postsData} columns = {"3"}/>
                      </TouchableOpacity > 
                  )}
                  keyExtractor = {(item) => item.id}
                />
            
            </View>
          
          <TouchableOpacity style = {styles.buttonSearch}>
            <Text>Xem tất cả nguyên liệu</Text>
          </TouchableOpacity>
          
        </View>
      
      </View> */}
      {/* <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Tham Gia Lễ Hội Bếp</Text>
          
            <View style={styles.row}>
            
                <FlatList
                  data = {festival}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem = { ({item}) => (
                      <TouchableOpacity  style={styles.itemListDiscover} >
                            <Text style={styles.textListHeadFestival}>{item.festival}</Text>
                            <View style={styles.listFestival}>
                              <Text style={styles.textListFestival}>{item.time}</Text>
                              <Text style={styles.textListFestival}>Chia sẻ món này!</Text>
                              
                            </View>
                            <FlatList
                                data={festivalWithItemCount}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.festival}
                              />
                            <FlatSL row = {"3"} data = {postsData} columns = {"3"}/>
                      </TouchableOpacity > 
                  )}
                  
                />
            
            </View>
          
          
        </View>
      
      </View> */}
      {/* <View style={styles.content}>
        <Text style={styles.textHeadList}>Món mới nhất</Text>
        
            <FlatList
              data = {postsData}
              showsHorizontalScrollIndicator={false}
              renderItem = {({item}) => (
                <View style={styles.postNew}>
                  
                  <View style={styles.headerPostNew}>
                    <Image source={{uri:item.contenImange}} style={styles.postImageNew}>
                    </Image>
                    <View style={styles.postHeadNew}>  
                      <Image source={{uri: item.profileImage}} style={styles.projectImage}></Image>
                      <Text style={styles.textNew}>{item.userName}</Text>
                    </View>
                    <Text style={styles.postTextNew}>{item.postText}</Text>
                  
                  </View>
                  
                    
                  <View style={styles.interactiveContainer}>
                    <View style={styles.buttonContent}>
                      <TouchableOpacity style={styles.buttonNew} onPress={()=>handleOnClicklove(Post.id)}>
                        <Text style={styles.textButtonNew} >❤️ {item.love}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonNew} onPress={()=>handleOnClickfaceWithSave(Post.id)}>
                        <Text style={styles.textButtonNew}>😋 {item.faceWithSave}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.buttonNew} onPress={()=>handleOnClickclap(Post.id)}>
                        <Text style={styles.textButtonNew}>👏 {item.clap}</Text>
                      </TouchableOpacity>
                    </View>
                      
                      
                  </View>
                  
                  
                </View>
                
              )}
              keyExtractor = {(item) => item.id}

              numColumns = {2}
              />
              
             
              
            
          
      </View>  */}
  </ScrollView>
      
    
  );
}

const styles = StyleSheet.create({
  main:{
    marginTop:20,
    marginLeft:10,
    marginRight:10,
  },
  container: {
    flex: 1,
    marginTop:1,
    

  },
  content:{
    marginBottom:10
  },
  post:{
    marginLeft:5,
    width:300,
    height:250,
    borderRadius:15,
    borderWidth: 1,
    marginBottom:5
  },
  
  postHead:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop:100,
  },

  text: {
    color:'white',
    fontSize: 15,
  },
  projectImage: {
    width:30,
    height:30,
    borderRadius: 50,
    margin:5,
  },
  postText:{
    color:'white',
    fontSize: 20,
    marginVertical:10,
  },
  postImage:{
    width:'100%',
    height:200,
    borderRadius:50
  },
  
  
  interactiveContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  
  buttonContent:{
    flexDirection:'row',
    height:36,
    margin:5,
  },
  button:{
    flexDirection:'row',
    backgroundColor:"lightblue",
    padding:5,
    margin:5,
    borderRadius:10,
    width:50,
  },
  textButton:{
    fontSize:12,
  },
  
  itemList:{
    flexDirection:'row',
    backgroundColor:"lightblue",
    width:70,
    height:30,
    margin:5,
    padding:4,
    borderRadius:10,
  },
  textList:{
    fontSize:12,
  },
  textHeadList:{
    fontSize:15,
    fontWeight:'500',
  },
  itemListCB:{
    margin:10,
    marginBottom:15,
    padding:5,
    
    borderColor:''
  },
  icon:{

  },
  
  buttonSearch:{
    flexDirection:'row',
    backgroundColor:"lightblue",
    alignItems:'center',
    alignSelf: 'center',
    width:300,
    height: 30,
    paddingLeft: 110,
    marginLeft:15,
  },
  row:{
    flexDirection:'row',
    marginTop:10
  },
  
  postImageThem:{
    width:'100%',
    height:110,
    borderRadius:50
  },
  textListThem:{
    fontSize:12,
    marginTop:70,
    padding:10,
    color:'white',
  },
  itemListDiscover:{
    flex: 1,
    width:300,
    height: 220,
    margin: 5,
  },
  listFestival:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:10,
    paddingTop:10
  },
  textListHeadFestival:{
    fontSize:20,
    fontWeight:'500',
  },
  postNew:{
    
    width:180,
    height:250,
    borderRadius:15,
    borderWidth: 2,
    marginTop:10,
    marginRight:5,
    marginBottom:10,
  },
  headerPostNew:{
    width:150,
    height:200,
    
  },
  
  buttonNew:{
    flexDirection:'row',
    backgroundColor:"lightblue",
    padding:3,
    marginLeft:1,
    marginRight:2,
    marginTop:5,
    borderRadius:10,
    width:45,
    height:20
  },
  textButtonNew:{
    fontSize:10
  },
  postHeadNew:{
    flexDirection: 'row',
    alignItems:'center',
    
  },
  postTextNew:{
    fontSize: 18,
    fontWeight:'500',
    paddingLeft:10
  },
  textNew: {
    fontSize: 12,
    
  },
  postImageNew:{
    width:176,
    height:120,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
  },
});
export default HomeScreen