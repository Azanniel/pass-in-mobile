import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Header } from "@/components/header";
import { Credential } from "@/components/credential";
import { Button } from "@/components/button";

export default function Ticket() {
  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="p-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential />
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
    </View>
  )
}