import { ArrowLeft } from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '../../../components/Avatar'
import { TweetarButton } from '../../../components/Button/TweetarButton'
import { InputTweet } from '../../../components/InputTweet'
import { InputOptions } from '../../../components/TweetOptions'
import { TweetContainer } from './styles'

export function Tweet() {
  const [tweetIsEmpty, setTweetIsEmpty] = useState<boolean>(true)

  const navigate = useNavigate()

  function handleOnChangeTweet() {
    setTweetIsEmpty(false)
  }

  function handleBackButton() {
    navigate('/')
  }

  return (
    <TweetContainer>
      <div className="buttons-wrapper">
        <button className="btn-back" onClick={handleBackButton}>
          <ArrowLeft size={20} weight="regular" />
        </button>
        <div className="btn-tweet-wrapper">
          <TweetarButton
            message="Tweetar"
            fontSize="small"
            disabled={tweetIsEmpty}
          />
        </div>
      </div>
      <div className="tweet-wrapper">
        <Avatar
          size={48}
          uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        <div>
          <InputTweet onChangeInput={handleOnChangeTweet} />
          <div className="options-wrapper">
            <InputOptions />
          </div>
        </div>
      </div>
    </TweetContainer>
  )
}
