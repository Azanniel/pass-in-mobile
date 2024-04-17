import { useState } from "react";
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View, Share } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'
import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { Button } from "@/components/button";
import { QrCode } from "@/components/qr-code";
import { useBadgeStorage } from "@/storage/badge-storage";
import { Redirect, router } from "expo-router";

export default function Ticket() {
  const [expandQrCode, setExpandQrCode] = useState(false)

  const badgeStorage = useBadgeStorage()

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4]
      })

      if(result.assets) {
        badgeStorage.updateAvatar(result.assets[0].uri)
      }
    } catch (error) {
      console.error(error)
      Alert.alert('Foto', 'Não foi possível escolher uma imagem')
    }
  }

  function handleRemove() {
    badgeStorage.delete()
    
    return router.replace('/')
  }

  async function handleShare() {
    try {
      if(!badgeStorage.badge) {
        return
      }

      await Share.share({
        title: 'Minha credencial',
        message: `Minha credencial do evento: ${badgeStorage.badge.checkInURL}`
      })
    } catch (error) {
      console.log(error)
      Alert.alert('Compartilhar', 'Não foi possível compartilhar')
    }
  }

  if(!badgeStorage.badge) {
    return <Redirect href='/' />
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
          data={badgeStorage.badge}
          avatar={badgeStorage.badge.image} 
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
          Mostre ao mundo que você vai participar do Evento {badgeStorage.badge.eventTitle}!
        </Text>

        <Button onPress={handleShare}>Compartilhar</Button>

        <TouchableOpacity
          className="mt-10"
          activeOpacity={0.7}
          onPress={handleRemove}
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