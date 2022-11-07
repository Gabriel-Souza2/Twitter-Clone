import { PencilLine } from 'phosphor-react'
import { TweetarButtonProps } from './TweetarButtonInterface'
import { TweetarButtonAdaptativeContainer } from './styles'

export function TweetarButtonAdaptative({
  message,
  fontSize = 1.8,
  disabled = false,
}: TweetarButtonProps) {
  return (
    <TweetarButtonAdaptativeContainer fontSize={fontSize}>
      <button className="btn-tweetar" disabled={disabled}>
        <PencilLine className="btn-tweetar-icon" weight="regular" />
        <span>{message}</span>
      </button>
    </TweetarButtonAdaptativeContainer>
  )
}
