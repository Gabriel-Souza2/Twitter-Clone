import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputTweetContainer } from './styles'

interface InputTweetProps {
  onChangeInput: () => void
}

export function InputTweet({ onChangeInput }: InputTweetProps) {
  const { register, watch } = useForm()

  const tweet = watch('tweet')
  const tweetEmpty = !tweet

  useEffect(() => {
    if (!tweetEmpty) {
      onChangeInput()
    }
  }, [tweetEmpty, onChangeInput])

  return (
    <InputTweetContainer>
      <textarea
        placeholder="O que está pensando?"
        maxLength={140}
        {...register('tweet')}
      />
    </InputTweetContainer>
  )
}
