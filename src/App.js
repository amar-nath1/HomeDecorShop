
import { Route, Switch } from "react-router-dom"
import About from "./Pages/About"
import HomePage from "./Pages/HomePage"
import Store from "./Store"
import Contact from "./Pages/ContactUs"
import ProductDetail from "./Pages/ProductDetail"
import LoginPage from "./Pages/LoginPage"

const App=()=>{

    return (

        <div>

            <Switch>

            <Route path='/' exact>
            <HomePage></HomePage>
        </Route>

<Route path='/welcome'>
            <HomePage></HomePage>
        </Route>

        <Route path='/store' exact>
            <Store></Store>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/contact'>
            <Contact></Contact>
        </Route>
        <Route path='/productDetails/:prodId'> 
        <ProductDetail></ProductDetail>
        </Route>

        <Route path='/auth'> 
        <LoginPage></LoginPage>
        </Route>

        </Switch>
       

        </div>
    )
}

export default App