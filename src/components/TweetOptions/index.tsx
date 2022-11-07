import {
  CalendarBlank,
  Gif,
  ImageSquare,
  ListBullets,
  MapPin,
  Smiley,
} from 'phosphor-react'

import { TweetOptionsContainer } from './styles'

export function InputOptions() {
  return (
    <TweetOptionsContainer>
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
    </TweetOptionsContainer>
  )
}
