import React, { FC } from 'react'
import { UserProfile } from '../types/useprofile'

type Props = {
    user: UserProfile;
}

const UserCard: FC<Props> = ({ user }) => {

    const style = {
        border: "3px solid red",
        borderRadius: "16px",
        padding: "16px",
        margin: "8px"
    }

  return (

    <dl style={style}>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
    </dl>
  )
}

export default UserCard