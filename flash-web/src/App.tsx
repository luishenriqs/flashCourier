import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/global'
import TrackingNumber from '../src/pages/TrackingNumber'
import Dashboard from '../src/pages/Dashboard'

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<TrackingNumber />} />
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path=":tracking_number" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
