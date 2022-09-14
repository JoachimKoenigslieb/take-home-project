import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: "Nunito", sans-serif;
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
`

export const ChatBubble = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 64px;

  > .bubble {
    background-color: #4cb2ed94;
    border-radius: 8px;
    border: 2px solid black;
    margin-top: 16px;
    width: 90%;
    padding-right: 32px;
  }

  > .blue {
    background: #3bc8ff;
  }

  > .orange {
    background: #ffb23e;
  }

  > .chat-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const PlayerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  height: 15%;
  border-radius: 8px;

  > h3 {
    color: darkblue;
  }

  > form {

    > input {
      padding: 8px 36px;
      font-size: 16px;
    }

  }
`
