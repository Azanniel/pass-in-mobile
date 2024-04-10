import { useState } from 'react'
import { View, Image, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function App() {
  const [code, setCode] = useState('')

  function handleAccessCredential() {
    if(!code.trim()) {
      return Alert.alert('Credencial', 'Por favor, insira o código do ingresso')
    }

    router.push('/ticket')
  }

  return (
    <View className="flex-1 items-center justify-center bg-green-500 p-8">
      <Image 
        className='h-16' 
        source={require('@/assets/logo.png')} 
        resizeMode='contain'
      />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color="#9FF9CC" />
          <Input.Field placeholder='Código do ingresso' value={code} onChangeText={setCode} />
        </Input>

        <Button onPress={handleAccessCredential}>Acessar credencial</Button>

        <Link className='text-gray-100 text-base font-bold text-center mt-8' href='/register'>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  )
}
