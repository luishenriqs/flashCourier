import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    flex: 1;
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: center;

    nav {
        margin-top: 60px;
        a {
            color: #e6b733;
            text-decoration: none;
            padding: 25px;
            font-size: 18px;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.6;
            }
        }
    }
`

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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
    margin-top: 40px;

    animation: ${appearFromRight} 1s;

    svg {
        margin-right: 16px;
    }

    strong {
        margin-top: 30px;
        font-size: 25px;
        color: #fff;
    }
`

export const TableContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 40px 0;

    thead {
        width: 800px;
        display: flex;
        height: 58px;
        margin: 5px 0;

        tr {
            width: 800px;
            padding: 0 60px;
            border-radius: 5px;
        }

        th {
            color: #e6b733;
            width: 350px;
            padding: 10px 0;
            text-align: center;
            line-height: 24px;
            font-size: 18px;
            font-weight: normal;
        }
    }

    tbody {
        width: 100%;
        display: flex;
        height: 58px;
        margin: 5px 0;

        tr {
            width: 800px;
            padding: 0 60px;
            border-radius: 5px;
        }

        td {
            color: #fff;
            width: 350px;
            padding: 10px 0;
            text-align: center;
            border: 0;
            font-size: 24px;
            font-weight: normal;

            :first-child {
                border-radius: 5px 0 0 5px;
            }

            :last-child {
                border-radius: 0 5px 5px 0;
            }
        }
    }
`
