import { View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function App() {
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
          <Input.Field placeholder='Código do ingresso' />
        </Input>

        <Button>Acessar credencial</Button>

        <Link className='text-gray-100 text-base font-bold text-center mt-8' href='/register'>
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  )
}
