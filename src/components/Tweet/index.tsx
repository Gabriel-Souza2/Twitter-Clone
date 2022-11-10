import { ChatCircle, DotsThree, Heart, Repeat, Share } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { ButtonAction, TweetContainer } from './styles'

export function Tweet() {
  return (
    <TweetContainer>
      <Avatar
        size={32}
        uri="https://images.unsplash.com/photo-1665873845039-addf16e6e180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      />
      <div className="content-wrapper">
        <header className="header-tweet">
          <div className="info-wrapper">
            <a href="" className="name">
              User Name
            </a>
            <span className="nick">@usernick</span>
            <div className="dot"></div>

            <a href="" className="time">
              54min
            </a>
          </div>
          <span className="options">
            <DotsThree size={23} weight="bold" />
          </span>
        </header>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            animi unde. Illum quibusdam voluptates est nulla fuga beatae
            molestias ipsam maxime, fugit tenetur similique autem in doloribus a
            ipsum delectus?
          </p>
        </div>
        <div className="actions">
          <ButtonAction variant="comments">
            <div>
              <ChatCircle className="icon comments" size={35} weight="bold" />
            </div>
            <span>2000</span>
          </ButtonAction>
          <ButtonAction variant="retweet">
            <Repeat className="icon retweet" size={35} weight="bold" />
            <span>2000</span>
          </ButtonAction>
          <ButtonAction variant="like">
            <Heart className="icon like" size={35} weight="bold" />
            <span>2000</span>
          </ButtonAction>
          <ButtonAction variant="share">
            <Share className="icon" size={35} weight="bold" />
          </ButtonAction>
        </div>
      </div>
    </TweetContainer>
  )
}
