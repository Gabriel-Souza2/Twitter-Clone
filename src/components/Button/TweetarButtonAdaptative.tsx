import { PencilLine } from 'phosphor-react'
import { TweetarButtonProps } from './TweetarButtonInterface'
import { TweetarButton } from './TweetarButton'
import { TweetarButtonAdaptativeContainer } from './styles'

export function TweetarButtonAdaptative({
  message,
  fontSize = 'medium',
  disabled = false,
  onClick = () => {},
}: TweetarButtonProps) {
  return (
    <TweetarButtonAdaptativeContainer>
      <TweetarButton
        message={message}
        fontSize={fontSize}
        disabled={disabled}
        onClick={onClick}
        icon={<PencilLine className="btn-tweetar-icon" weight="regular" />}
      />
    </TweetarButtonAdaptativeContainer>
  )
}
