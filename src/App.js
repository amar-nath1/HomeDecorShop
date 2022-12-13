
import { Route } from "react-router-dom"
import About from "./Pages/About"
import Welcome from "./Welcome"
const App=()=>{

    return (

        <div>

<Route path='/' exact>
            <Welcome></Welcome>
        </Route>

        <Route path='/welcome'>
            <Welcome></Welcome>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>

       

        </div>
    )
}

export default App