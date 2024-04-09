import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, View } from "react-native";
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { Link, router } from "expo-router";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleRegister() {
    if(!name.trim() || !email.trim()) {
      return Alert.alert('Credencial', 'Por favor, preencha todos os campos')
    }

    router.push('/ticket')
  }

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
            <Input.Field 
              placeholder='Nome completo' 
              autoComplete="name" 
              autoCapitalize="words" 
              value={name} 
              onChangeText={setName}
            />
          </Input>

          <Input>
            <MaterialIcons name='alternate-email' size={20} color="#9FF9CC" />
            <Input.Field 
              placeholder='Email' 
              keyboardType="email-address" 
              autoComplete="email"
              autoCapitalize="none"
              value={email} 
              onChangeText={setEmail}
            />
          </Input>

          <Button onPress={handleRegister}>Realizar inscrição</Button>

          <Link className='text-gray-100 text-base font-bold text-center mt-8' href='/'>
            Já possui ingresso?
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}