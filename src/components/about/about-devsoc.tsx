import { VoidFunctionComponent } from 'react'
import { FakeMessage } from './fake-message'

export const AboutDevSoc: VoidFunctionComponent = () => {
  return (
    <>
      <FakeMessage from='student'>
        Hi there! Could you tell me a little bit more about DevSoc?
      </FakeMessage>
      <FakeMessage from='committee'>
        <p>Hiya! DevSoc is a society under NTU's Department of Computer
Science that focuses on all things computer science and IT.</p>
<p>At DevSoc we welcome all kinds of activities ranging
from making games to tinkering with hardware.</p>

      </FakeMessage>
      <FakeMessage from='student'>

      </FakeMessage>
      <FakeMessage from='committee'>

      </FakeMessage>
    </>
  )
}
