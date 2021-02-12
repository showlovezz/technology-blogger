import styled from 'styled-components'

export const StyledSection = styled.section`
  background-image: linear-gradient(to ${props => props.page === 'login' ? 'right' : 'left'}, #D500F9, #FFD54F);
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-y: auto;
`

export const StyledFlex = styled.div`
  display: flex;
`

export const StyledFormBlock = styled.div`
  background-color: #fff;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledFormCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 25px;
`

export const StyledFormBody = styled.div`
  width: 70%;

  h3,p {
    text-align: center;
    margin-bottom: 60px;
  }

  p {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const StyledFormGroup = styled.div`
  margin-bottom: 60px;
`

export const StyledUserLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  button {
    border-radius: 50px;
    color: #D500F9;
    background-color: #fff;
    padding: 8px 40px;
    cursor: pointer;
    border: 2px solid #D500F9;

    &:hover {
      color: #fff;
      background-image: linear-gradient(to right, #FFD54F, #D500F9)
    }
  }
`

export const StyledDescBlock = styled.div`
  background-image: linear-gradient(to ${props => props.page === 'login' ? 'left' : 'right'}, #D500F9, #FFD54F);
  width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledDescCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 25px;
  height: 100%;
  align-items: center;
`

export const StyledDescBody = styled.div`
  width: 70%;

  h3,p {
    text-align: left;
    margin-bottom: 30px;
    color: #fff;
  }
`
