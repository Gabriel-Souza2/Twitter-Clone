import { TweetarButtonProps } from './TweetarButtonInterface'
import { BaseButton } from './styles'

export function TweetarButton({
  message,
  fontSize = 'medium',
  disabled = false,
  onClick = () => {},
  icon = '',
}: TweetarButtonProps) {
  function handleClick() {
    onClick()
  }

  return (
    <BaseButton fontSize={fontSize}>
      <button onClick={handleClick} className="btn-tweetar" disabled={disabled}>
        <span className="icon">{icon}</span>
        <span className="message">{message}</span>
      </button>
    </BaseButton>
  )
}
