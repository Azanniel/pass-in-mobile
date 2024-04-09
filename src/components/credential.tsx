import { Image, ImageBackground, Text, View, TouchableOpacity } from "react-native";

export function Credential() {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        className="w-24 h-52 z-10"
        source={require('@/assets/ticket/band.png')}
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-lg -mt-5">
        <ImageBackground
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
          source={require('@/assets/ticket/header.png')}
        >
          <View className="w-full items-center flex-row justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Submit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123456789</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        <Image
          className="w-36 h-36 rounded-full -mt-24"
          source={{ uri: 'https://github.com/azanniel.png' }}
        />

        <Text className="text-zinc-50 text-2xl font-bold mt-4">Leandro Azanniel</Text>
        <Text className="text-zinc-300 text-base font-regular mb-4">leandro.azanniel@email.com</Text>

        <Image
          className="w-32 h-32"
          source={require('@/assets/ticket/qrcode.png')}
        />

        <TouchableOpacity activeOpacity={0.7} className="mt-6">
          <Text className="font-medium text-orange-500 text-sm">Ampliar QrCode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
