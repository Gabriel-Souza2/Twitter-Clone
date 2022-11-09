import React from 'react'

export interface TweetarButtonProps {
  message: string
  fontSize?: 'small' | 'medium'
  disabled?: boolean
  onClick?: () => void
  icon?: React.ReactNode
}
