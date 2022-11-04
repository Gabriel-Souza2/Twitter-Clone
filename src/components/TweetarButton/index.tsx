import { PencilLine } from 'phosphor-react'
import { BtnContainer } from './styles'

export function TweetarButton() {
  return (
    <BtnContainer>
      <a href="" className="btn-tweetar ">
        <PencilLine className="btn-tweetar-icon" weight="regular" />
        <span>Tweetar</span>
      </a>
    </BtnContainer>
  )
}
