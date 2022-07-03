import React, { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/flash-courier-logo.png'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Container, AnimationContainer } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

interface ITracking {
    tracking_number: number
}

const Tracking: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    let navigate = useNavigate()

    const handleSubmit = useCallback(
        async ({ tracking_number }: ITracking) => {
            try {
                navigate(`/dashboard/${tracking_number}`)
            } catch (error) {
                console.log('error', error)
            }
        },
        [navigate]
    )

    return (
        <>
            <Container
                style={{ background: 'linear-gradient(#6A8FC8, #6379B3)' }}
            >
                <AnimationContainer>
                    <img src={Logo} alt="Logo" />

                    <strong>
                        Rastreie sua <br /> encomenda
                    </strong>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <Input
                                name="tracking_number"
                                placeholder="Código de Rastreio"
                                type="number"
                            />
                        </div>
                        <Button className="firstButton" type="submit">
                            Rastrear
                        </Button>
                    </Form>
                </AnimationContainer>
            </Container>
        </>
    )
}

export default Tracking
