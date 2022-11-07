import {
  CalendarBlank,
  Gif,
  ImageSquare,
  ListBullets,
  MapPin,
  Smiley,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { Avatar } from '../Avatar'
import { TweetPainelContainer } from './styles'

import { TweetarButton } from '../../components/Button/TweetarButton'

export function TweetPainel() {
  const { register, watch } = useForm()

  const tweet = watch('tweet')
  const tweetEmpty = !tweet

  return (
    <TweetPainelContainer>
      <Avatar
        size={48}
        uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className="post-wrapper">
        <textarea
          placeholder="O que está pensando?"
          maxLength={140}
          {...register('tweet')}
        />
        <div className="options-wrapper">
          <ul className="input-options">
            <li>
              <button>
                <ImageSquare size={20} />
              </button>
            </li>
            <li>
              <button>
                <Gif size={20} />
              </button>
            </li>
            <li>
              <button>
                <ListBullets size={20} />
              </button>
            </li>
            <li>
              <button>
                <Smiley size={20} />
              </button>
            </li>
            <li>
              <button>
                <CalendarBlank size={20} />
              </button>
            </li>
            <li>
              <button>
                <MapPin size={20} />
              </button>
            </li>
          </ul>
          <div className="btn">
            <TweetarButton
              message="Tweetar"
              fontSize={1.5}
              disabled={tweetEmpty}
            />
          </div>
        </div>
      </div>
    </TweetPainelContainer>
  )
}
