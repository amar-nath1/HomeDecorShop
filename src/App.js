
import { Route } from "react-router-dom"
import About from "./Pages/About"
import HomePage from "./Pages/HomePage"
import Store from "./Store"
import Contact from "./Pages/ContactUs"

const App=()=>{

    return (

        <div>

<Route path='/' exact>
            <HomePage></HomePage>
        </Route>

        <Route path='/store'>
            <Store></Store>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/contact'>
            <Contact></Contact>
        </Route>
       

        </div>
    )
}

export default App