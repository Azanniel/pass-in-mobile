import { useState } from "react";
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'
import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { Button } from "@/components/button";
import { QrCode } from "@/components/qr-code";

export default function Ticket() {
  const [image, setImage] = useState('')
  const [expandQrCode, setExpandQrCode] = useState(false)

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4]
      })

      if(result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.error(error)
      Alert.alert('Foto', 'Não foi possível escolher uma imagem')
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha credencial" />

      <ScrollView
        className="-mt-36 -z-10"
        contentContainerClassName="p-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential 
          avatar={image} 
          onChangeAvatar={handleSelectImage}
          onShowQrCode={() => setExpandQrCode(true)}
        />

        <FontAwesome
          className="self-center my-6"
          name="angle-double-down"
          size={24}
          color={'#8D8D99'}
        />

        <Text className="text-zinc-50 font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mt-1 mb-6">
          Mostre ao mundo que você vai participar do Unite Submit!
        </Text>

        <Button>Compartilhar</Button>

        <TouchableOpacity
          className="mt-10"
          activeOpacity={0.7}
        >
          <Text className="text-base text-zinc-50 font-bold text-center">Remover ingresso</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandQrCode} animationType="slide" statusBarTranslucent>
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QrCode value="123456789" size={300} />
          <TouchableOpacity className="mt-10" activeOpacity={0.7} onPress={() => setExpandQrCode(false)}>
          <Text className="font-medium text-orange-500 text-sm text-center">Fechar QrCode</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}