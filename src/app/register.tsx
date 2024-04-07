import { Image, KeyboardAvoidingView, View } from "react-native";
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link } from "expo-router";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Register() {
  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding">
      <View className="flex-1 items-center justify-center bg-green-500 p-8">
        <Image
          className='h-16'
          source={require('@/assets/logo.png')}
          resizeMode='contain'
        />

        <View className='w-full mt-12 gap-3'>
          <Input>
            <FontAwesome6 name='user-circle' size={20} color="#9FF9CC" />
            <Input.Field placeholder='Nome completo' autoComplete="name" />
          </Input>

          <Input>
            <MaterialIcons name='alternate-email' size={20} color="#9FF9CC" />
            <Input.Field placeholder='Email' keyboardType="email-address" autoComplete="email" />
          </Input>

          <Button>Acessar credencial</Button>

          <Link className='text-gray-100 text-base font-bold text-center mt-8' href='/'>
            Já possui ingresso?
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}