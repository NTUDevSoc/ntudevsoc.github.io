import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VoidFunctionComponent } from 'react'

export interface ProfilePictureProps {
  color: 'blue' | 'pink'
}

export const FakeProfilePicture: VoidFunctionComponent<ProfilePictureProps> = ({ color }) => {
  return (
    <FontAwesomeIcon icon={faUser} color={color}></FontAwesomeIcon>
  )
}
