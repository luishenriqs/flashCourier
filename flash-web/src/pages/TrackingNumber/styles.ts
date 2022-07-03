import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    strong {
        margin-top: 15px;
        font-size: 45px;
        color: #fff;
    }

    form {
        margin: 25px 0;
        width: 340px;
        text-align: center;
    }
`
