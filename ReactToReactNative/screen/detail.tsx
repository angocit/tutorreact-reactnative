import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, ScrollView, Text, View } from 'react-native'
import { IProduct } from '../interface/product'

const DetailScreen = ({route}:{route:any}) => {
    const [product,setProduct] = useState<IProduct>({} as IProduct)
    useEffect(()=>{
        //IIFE
        (async ()=>{
            try {
                const {data} = await axios.get(`https://api.ngocnv.top/api/products/${route.params.id}`)
                setProduct(data.data)
                console.log(data);
                
            } catch (error) {
                console.log(error);                
            }
        })()
    },[])
  return (
    <ScrollView>
        <View>
            <Image source={{uri:product.image}}
                style={{width:'100%',height:150}}
                />
            <Text>{product.name}</Text>
            <Text>Giá: {product.price}</Text>
            <Button onPress={()=>Alert.alert('Message','Bạn vừa thêm vào giỏ hàng')} title='Add to cart'/>
        </View>
    </ScrollView>
  )
}

export default DetailScreen