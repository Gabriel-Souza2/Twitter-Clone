import { Button } from './Button'
import { TweetarButtonProps } from './TweetarButtonInterface'

export function TweetarButton({
  message,
  fontSize = 'medium',
  disabled = false,
  onClick = () => {},
}: TweetarButtonProps) {
  return (
    <Button
      message={message}
      fontSize={fontSize}
      disabled={disabled}
      onClick={onClick}
    />
  )
}
