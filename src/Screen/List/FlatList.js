import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListTemplate from "./listTemplate";

export default function ListData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch('https://randomuser.me/api/?results=10')
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
    //   console.log(JSON.stringify(data));
      setData(parseData(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  function parseData(userData){
    userData = userData.results;
    const arrayData = []
    for(const data of userData){
        const temp = {
            name : data.name.title+data.name.first+data.name.last,
            email : data.email,
            phone : data.phone,
            id : data.id.value,
            uri : data.picture.medium
        }
        arrayData.push(temp)
    }
     return arrayData;
  }
  //   fetchData();
//   
  return (
    <>
      <View>
            <View>
                <Text style={styles.header}>
                    {/* Data */}
                </Text>
            </View>
          <FlatList
            renderItem={({ item, index, separator }) => {
              return (
                <ListTemplate data={item}/>
              );
            }}
            data={data}
            keyExtractor={(item,index) => index}
            onRefresh={fetchData}
            refreshing={loading}
            //   horizontal={true}
          ></FlatList>
        
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        borderWidth:1,
    },
    header:{
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        margin:10,
        fontSize:50,
        textDecorationLine:"underline"
    },
    subcontainer:{
        width:150
    }
})

