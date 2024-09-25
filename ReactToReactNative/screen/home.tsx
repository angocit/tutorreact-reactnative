import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, View,Text, SafeAreaView, Image, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import { IProduct } from '../interface/product'
// import {} from '../interface/products'
const HomeScreen = ({navigation}:{navigation:any}) => {
    const [products,setProduct] = useState<IProduct[]>([])
    useEffect(()=>{
        //IIFE
        (async ()=>{
            try {
                const {data} = await axios.get('https://api.ngocnv.top/api/products')
                setProduct(data)
                console.log(data);
                
            } catch (error) {
                console.log(error);                
            }
        })()
    },[])
    const ClickToDetail = (id:number|string)=>{
        // Alert.alert('Message',`id san pham: ${id}`)
        navigation.navigate('Detail',{id:id})
    }
  return (
    <ScrollView>
        <View style ={styles.container}>
            {products.map((product)=>(
                <TouchableOpacity style = {styles.item} key={product._id} onPress={()=>ClickToDetail(product._id)}>
                <Image source={{uri:product.image}}
                style={{width:'100%',height:150}}
                />
                <Text>{product.name}</Text>
                <Text>Giá: {product.price}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding: 20,
        backgroundColor:'#ccc',
        gap:10
    },
    item:{
        width: 150,
        flexGrow:1
    }
})