import { Avatar } from '../Avatar'

import { Container } from './styles'

export function UserInfo() {
  return (
    <Container>
      <div className="avatar-wrapper">
        <Avatar uri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      </div>
      <div className="user-info">
        <span className="user-name">User Name</span>
        <span className="nick">@username</span>
      </div>
    </Container>
  )
}
