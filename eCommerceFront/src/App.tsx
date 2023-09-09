import { 
  BrowserRouter, 
  Route, 
  Routes
} from "react-router-dom"
import MainContainer from "./Components/MainContainer"
import MainPage from "./Components/MainPage"

const App:React.FC = () =>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer/>}>
          <Route index element={<MainPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
