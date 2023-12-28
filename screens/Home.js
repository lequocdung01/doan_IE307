//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Button, FlatList, TextInput, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatSL from '../components/FlastSL';
const iconName = 'bookmark-outline';
import { AirbnbRating } from 'react-native-ratings';
import axios from 'axios';
const iconUnCheck = 'checkmark-circle-outline';
const iconCheck = 'checkmark-circle';

const HomeScreen = ({ navigation }) => {
  const [dsthucdon, getdstd] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [uniqueMealTypes, setUniqueMealTypes] = useState([]);
  const [uniqueFoodProcessingTypes, setUniqueFoodProcessingTypes] = useState([]);
  const [dsuser, getuser] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [dsrating, getrating] = useState([]);

  const getapithucdon = async () => {
    try {
      const response = await axios.get(
        'http://192.168.88.128:3000/api/getAllDish');
      getdstd(response.data);
    } catch (error) {
      // handle err
      // alert(error.message);
    } finally {
      setRefreshing(false); // Dừng hiệu ứng làm mới sau khi dữ liệu đã được lấy xong
    }
  };
  useEffect(() => {
    getapithucdon();
  }, []);

  useEffect(() => {
    const mealTypes = dsthucdon.map(item => item.mealType);
    const uniqueMealTypes = [...new Set(mealTypes)];
    setUniqueMealTypes(uniqueMealTypes);
    console.log('Unique Meal Types:', uniqueMealTypes);
  }, [dsthucdon]);

  useEffect(() => {
    const foodProcessingTypes = dsthucdon.map(item => item.foodProcessingType);
    const uniqueFoodProcessingTypes = [...new Set(foodProcessingTypes)];
    setUniqueFoodProcessingTypes(uniqueFoodProcessingTypes);
    console.log('Unique Meal Types:', uniqueFoodProcessingTypes);
  }, [dsthucdon]);


  const onRefresh = () => {
    setRefreshing(true);
    getapithucdon();
  }

  const getdsuser = async () => {
    try {
      const response = await axios.get(
        'http://192.168.88.128:3000/api/getUser');
      getuser(response.data);
    } catch (error) {
      // handle err
      // alert(error.message);
    }
  };
  useEffect(() => {
    getdsuser();
  }, []);

  const combineData = () => {
    // Kết hợp dữ liệu từ dsuser và dsthucdon khi userId trùng nhau
    const combinedData = dsthucdon.map(post => {
      const user = dsuser.find(user => user._id === post.userId);
      return { ...post, user };
    });

    setCombinedData(combinedData);
  };

  useEffect(() => {
    combineData();
  }, [dsuser, dsthucdon]);

  return (
    <ScrollView style={styles.main}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.content}>
        <View style={styles.container}>
          <View >
            <Text style={styles.textHeadList}>Trong tủ lạnh của bạn có gì?</Text>
            <Text>Chọn đến 2 nguyên liệu</Text>
            <FlatList
              horizontal={true}
              data={uniqueMealTypes}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('SearchMeal', { items: item })}>
                  <Icon style={styles.icon} name={iconCheck} color={'#000'} size={15} />
                  <Text style={styles.textList}>{item}</Text>

                </TouchableOpacity >
              )}
              keyExtractor={(item) => item.id}

            />
          </View>
          <View >
            <FlatList
              horizontal={true}
              data={uniqueFoodProcessingTypes}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemListCB} onPress={() => navigation.navigate('SearchProcessing', { items: item })}>
                  <Text style={styles.textList}>{item}</Text>

                </TouchableOpacity >
              )}
              keyExtractor={(item) => item.id}

            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >

            {
              combinedData.map(Post => (
                <TouchableOpacity style={styles.post} key={Post.id} onPress={() => navigation.navigate('BaiViet',
                  {
                    id: Post._id, name: Post.foodName, Photo: Post.foodPhoto, Processing: Post.foodProcessing,
                    Ingredients: Post.foodIngredients, Time: Post.cookingTime, Feel: Post.feel, FoodRations: Post.foodRations
                  })}>

                  <View style={styles.headerPost}>
                    <ImageBackground source={{ uri: Post.foodPhoto }} style={styles.postImage} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                      <View style={styles.postHead}>
                        <Image source={{ uri: Post.profileImage }} style={styles.projectImage}></Image>
                        <Text style={styles.text}>{Post.user && Post.user.name
                          ? `${Post.user.name.lastname} ${Post.user.name.firstname}`
                          : 'Unknown User'}</Text>
                      </View>
                      <Text style={styles.postText}>{Post.foodName}</Text>
                    </ImageBackground>

                  </View>
                  <View>
                    <View style={styles.interactiveContainer}>
                      <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                        defaultRating={Post.aveRating}
                        size={14}
                        showRating={false}
                        isDisabled
                      />
                    </View>
                  </View>

                </TouchableOpacity>

              ))

            }

          </ScrollView>
          <View>
            <TouchableOpacity style={styles.buttonSearch}>
              <Icon style={styles.icon} name={"search"} color={'#000'} size={15} />
              <Text>Gợi ý khác</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Bạn đang thèm gì?</Text>
          <Text>Không chắc? Tiếp tục tạo bất ngờ</Text>
        </View>
        <View style={styles.row}>
          <FlatSL
            row={4}
            data={dsthucdon}
            columns={2}

          />

        </View>
        <TouchableOpacity style={styles.buttonTBN}>
          <Icon style={styles.icon} name={"search"} color={'#000'} size={15} />
          <Text>Tạo bất ngờ cho tôi!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Khám phá xem thứ gì đang trong mùa nào!</Text>

          <View style={styles.row}>

            <FlatList
              data={dsthucdon}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemListDiscover} >
                  <ImageBackground source={{ uri: item.foodPhoto }} style={styles.postImageThem} imageStyle={{ borderRadius: 15 }}>
                    <Text style={styles.textListThem}>{item.foodName}</Text>
                  </ImageBackground>

                  <FlatSL row={"3"} data={dsthucdon} columns={"3"} />
                </TouchableOpacity >
              )}
              keyExtractor={(item) => item.id}
            />

          </View>

          <TouchableOpacity style={styles.buttonTBN}>
            <Text>Xem tất cả nguyên liệu</Text>
          </TouchableOpacity>

        </View>

      </View>
      <View style={styles.content}>
        <Text style={styles.textHeadList}>Món mới nhất</Text>

        <FlatList
          scrollEnabled={false}
          data={combinedData}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.postNew} onPress={() => navigation.navigate('BaiViet',
              {
                id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing,
                Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations,
                UserId: item.userId
              })}>

              <View style={styles.headerPostNew}>
                <Image source={{ uri: item.foodPhoto }} style={styles.postImageNew}>
                </Image>
                <View style={styles.postHeadNew}>
                  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjuAlP67tv7QzTpcc--fy9UnBSM3JszDFCw&usqp=CAU' }} style={styles.projectImage}></Image>
                  <Text style={styles.textNew}>{item.user && item.user.name
                    ? `${item.user.name.lastname} ${item.user.name.firstname}`
                    : 'Unknown User'}</Text>
                </View>
                <Text style={styles.postTextNew}>{item.foodName}</Text>

              </View>


              <View style={styles.interactiveContainer}>
                <AirbnbRating
                  count={5}
                  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                  defaultRating={item.aveRating}
                  size={14}
                  showRating={false}
                  isDisabled
                />
              </View>


            </TouchableOpacity>

          )}

          numColumns={2}
        />
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    marginTop: 1,


  },
  content: {
    marginBottom: 10
  },
  post: {
    marginLeft: 5,
    width: 300,
    height: 250,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 5
  },

  postHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
  },

  text: {
    color: 'white',
    fontSize: 15,
  },
  projectImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    margin: 5,
  },
  postText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 50
  },


  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:6,
    paddingTop:5,
  },

  itemList: {
    flexDirection: 'row',
    backgroundColor: "lightblue",
    width: 75,
    height: 26,
    margin: 5,
    padding: 4,
    borderRadius: 10,
  },
  textList: {
    fontSize: 12,
  },
  textHeadList: {
    fontSize: 15,
    fontWeight: "500",
  },
  itemListCB: {
    margin: 10,
    marginBottom: 15,
    padding: 5,

    borderColor: ''
  },
  icon: {

  },

  buttonSearch: {
    flexDirection: 'row',
    backgroundColor: "lightblue",
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    height: 30,
    paddingLeft: 110,
    marginLeft: 15,
  },
  buttonTBN: {
    flexDirection: 'row',
    backgroundColor: "lightblue",
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    height: 30,
    paddingLeft: 80,
    marginLeft: 15,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10
  },

  postImageThem: {
    width: '100%',
    height: 110,
    borderRadius: 50
  },
  textListThem: {
    fontSize: 13,
    marginTop: 70,
    padding: 10,
    color: 'white',
  },
  itemListDiscover: {
    flex: 1,
    width: 300,
    height: 220,
    margin: 5,
  },
  listFestival: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  textListHeadFestival: {
    fontSize: 20,
    fontWeight: "500",
  },
  postNew: {

    width: 180,
    height: 250,
    borderRadius: 15,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 10,
  },
  headerPostNew: {
    width: 150,
    height: 200,

  },

  // buttonNew: {
  //   flexDirection: 'row',
  //   backgroundColor: "lightblue",
  //   padding: 3,
  //   marginLeft: 1,
  //   marginRight: 2,
  //   marginTop: 5,
  //   borderRadius: 10,
  //   width: 45,
  //   height: 20
  // },
  // textButtonNew: {
  //   fontSize: 10
  // },
  postHeadNew: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  postTextNew: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },
  textNew: {
    fontSize: 12,

  },
  postImageNew: {
    width: 176,
    height: 120,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
export default HomeScreen