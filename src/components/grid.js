import styled from '@emotion/styled'

export const Row = styled('section')`
  display: flex;
  flex-flow: row wrap;
`

export const Col = styled('div')`
  margin-bottom: 1.5rem;
  flex: 0 0 100%;
`

export const Col3 = styled(Col)`
  padding: 0 10px;
  @media (min-width: 575px) {
    flex: 0 0 48%;
  }
  @media (min-width: 768px) {
    flex: 0 0 33.33%;
  }
`

export const Col4 = styled(Col)`
  padding: 0 8px;
  @media (min-width: 575px) {
    flex: 0 0 32%;
  }
  @media (min-width: 768px) {
    flex: 0 0 23.5%;
  }
`
