import QRCodeSvg from 'react-native-qrcode-svg'

interface QrCodeProps {
  value: string
  size: number
}

export function QrCode(props: QrCodeProps) {
  return (
    <QRCodeSvg
      value={props.value}
      size={props.size}
      color="#FFF"
      backgroundColor="transparent"
    />
  )
}
