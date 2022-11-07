import { TweetarButtonProps } from './TweetarButtonInterface'
import { TweetarButtonContainer } from './styles'

export function TweetarButton({
  message,
  fontSize = 1.8,
  disabled = false,
}: TweetarButtonProps) {
  return (
    <TweetarButtonContainer fontSize={fontSize}>
      <button className="btn-tweetar" disabled={disabled}>
        <span>{message}</span>
      </button>
    </TweetarButtonContainer>
  )
}
