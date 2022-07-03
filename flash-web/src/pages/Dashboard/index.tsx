import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Logo from '../../assets/flash-courier-logo.png'
import { Container, AnimationContainer, TableContainer } from './styles'

interface IProducts {
    id: string
    tracking_number: number
    owner: string
    email: string
    product_type: string
    status: string
    created_at: string
    updated_at: string
}

const Dashboard: React.FC = () => {
    const [foundProduct, setFoundProduct] = useState<IProducts>()

    const url = window.location

    var params = url.pathname.split('/')
    const tracking_number = params[2]

    useEffect(() => {
        const loadAppointments = async (): Promise<void> => {
            const response = await api.get(
                `/products/tracking/${tracking_number}`
            )
            const { product } = response.data
            setFoundProduct(product)
        }
        loadAppointments()
    }, [tracking_number])

    return (
        <>
            <Container
                style={{ background: 'linear-gradient(#6A8FC8, #6379B3)' }}
            >
                <nav>
                    <Link to={`/`}>
                        <strong>Voltar</strong>
                    </Link>
                </nav>
                <AnimationContainer>
                    <img src={Logo} alt="Logo" />

                    {foundProduct ? (
                        <>
                            <strong>Produto encontrado:</strong>
                            <TableContainer>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Tipo do produto</th>
                                            <th>Status da entrega</th>
                                        </tr>
                                    </thead>

                                    <tbody key={foundProduct?.id}>
                                        <tr>
                                            <td>{foundProduct?.owner}</td>
                                            <td>
                                                {foundProduct?.product_type}
                                            </td>
                                            <td>{foundProduct?.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TableContainer>
                        </>
                    ) : (
                        <strong>Nenhum produto foi encontrado:</strong>
                    )}
                </AnimationContainer>
            </Container>
        </>
    )
}

export default Dashboard
