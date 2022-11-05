import { PencilLine } from 'phosphor-react'
import { BtnContainer } from './styles'

interface TweetarButtonProps {
  message: string
  fontSize?: number
  disabled?: boolean
}

export function TweetarButton({
  message,
  fontSize = 1.8,
  disabled = false,
}: TweetarButtonProps) {
  return (
    <BtnContainer fontSize={fontSize}>
      <button className="btn-tweetar" disabled={disabled}>
        <PencilLine className="btn-tweetar-icon" weight="regular" />
        <span>{message}</span>
      </button>
    </BtnContainer>
  )
}
