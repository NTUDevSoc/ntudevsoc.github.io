import { FunctionComponent } from 'react'

export interface FakeMessageProps {
  from: 'student' | 'committee'
}

export const FakeMessage: FunctionComponent<FakeMessageProps> = ({ children, from }) => {
  return (
    <>
       
    </>
  )
}
