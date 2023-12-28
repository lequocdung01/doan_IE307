import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import FlatSL from '../components/FlastSL';
import { AirbnbRating } from 'react-native-ratings';

const SearchProcessing = ({ navigation, route }) => {
  const [dsthucdon, getdstd] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dsuser, getuser] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const { items: foodProcessingTypes } = route.params;

  const getapithucdon = async () => {
    try {
      const response = await axios.get('http://192.168.88.128:3000/api/getAllDish');
      getdstd(response.data);
    } catch (error) {
    }
  };
  const filteredData = combinedData.filter(item => foodProcessingTypes.includes(item.foodProcessingType));
  useEffect(() => {
    getapithucdon();
  }, []);

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

  const filterData = (item) => {
    if (searchInput === "") {
      return null;
    }
    if (item.foodName.toLowerCase().includes(searchInput.toLowerCase())) {
      return (
        <TouchableOpacity style={styles.postNew} onPress={() => navigation.navigate('BaiViet',
          {
            id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing,
            Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations
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
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Gõ vào món ăn cần tìm"
          onChangeText={text => setSearchInput(text)}
        />
      </View>
      <FlatList
        style={styles.myFood}
        scrollEnabled={false}
        data={combinedData}
        renderItem={({ item, index }) => filterData(item)}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.textHeadList}>Món ăn của: </Text>

          <View style={styles.row}>

            <FlatList
              scrollEnabled={false}
              data={filteredData}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.postNew} onPress={() => navigation.navigate('BaiViet',
                  {
                    id: item._id, name: item.foodName, Photo: item.foodPhoto, Processing: item.foodProcessing,
                    Ingredients: item.foodIngredients, Time: item.cookingTime, Feel: item.feel, FoodRations: item.foodRations
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
              keyExtractor={(item) => item.id}

              numColumns={2}
            />

          </View>

          <TouchableOpacity style={styles.buttonTBN}>
            <Text>Món ăn ngẫu nhiên</Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#DDDDDD',
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 80,
  },
  searchInput: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 20,
    height: 50,
  },
  selectedDishImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  content: {
    marginLeft: 25,
  },
  textHeadList: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10
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

  // search
  myFood: {
    marginLeft: 25,
  },
  postImageNew: {
    width: 160,
    height: 120,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  postNew: {
    width: 160,
    height: 220,
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: "#fff",
    marginBottom: 15,
    marginRight: 15,
  },
  headerPostNew: {
    width: 250,
    height: 200,

  },
  postHeadNew: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  textButtonNew: {
    fontSize: 10
  },
  postHeadNew: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  postTextNew: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    width: 150,
  },
  textNew: {
    fontSize: 14,
    width: 120,
  },
  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 6,
  },
  buttonContent: {
    flexDirection: 'row',
    height: 36,
    margin: 5,
  },
  buttonNew: {
    flexDirection: 'row',
    backgroundColor: "lightblue",
    padding: 3,
    marginLeft: 1,
    marginRight: 2,
    marginTop: 100,
    borderRadius: 10,
    width: 45,
    height: 20
  },
  projectImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 5,
  },
});

export default SearchProcessing;