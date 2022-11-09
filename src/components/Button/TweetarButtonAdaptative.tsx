import { PencilLine } from 'phosphor-react'
import { TweetarButtonProps } from './TweetarButtonInterface'
import { Button } from './Button'
import { TweetarButtonAdaptativeContainer } from './styles'

export function TweetarButtonAdaptative({
  message,
  fontSize = 'medium',
  disabled = false,
  onClick = () => {},
}: TweetarButtonProps) {
  return (
    <TweetarButtonAdaptativeContainer>
      <Button
        message={message}
        fontSize={fontSize}
        disabled={disabled}
        onClick={onClick}
        icon={<PencilLine className="btn-tweetar-icon" weight="regular" />}
      />
    </TweetarButtonAdaptativeContainer>
  )
}
