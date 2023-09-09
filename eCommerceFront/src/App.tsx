import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainContainer from "./Components/MainContainer"
import MainPage from "./Components/MainPage"
import { QueryClient, QueryClientProvider } from "react-query"

const App: React.FC = () => {
    const qc = new QueryClient()

    return (
        <QueryClientProvider client={qc}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContainer />}>
                        <Route index element={<MainPage />} />
                        <Route path="/:term" element={<MainContainer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
