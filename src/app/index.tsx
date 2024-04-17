import { useState } from 'react'
import { View, Image, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, Redirect } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { api } from '@/lib/axios'
import { useBadgeStorage } from '@/storage/badge-storage'

export default function App() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const badgeStorage = useBadgeStorage()

  async function handleAccessCredential() {
    try {
      if(!code.trim()) {
        return Alert.alert('Ingresso', 'Por favor, insira o código do ingresso')
      }
  
      setIsLoading(true)

      const { data } = await api.get(`/attendees/${code}/badge`)

      badgeStorage.save(data.badge)
    } catch (error) {
      setIsLoading(false)
      console.log(error)

      Alert.alert('Ingresso', 'Ingresso não encontrado')
    }
  }

  if(badgeStorage.badge?.checkInURL) {
    return <Redirect href='/ticket' />
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

        <Button onPress={handleAccessCredential} isLoading={isLoading}>Acessar credencial</Button>

        <Link className='text-gray-100 text-base font-bold text-center mt-8' href='/register'>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  )
}
