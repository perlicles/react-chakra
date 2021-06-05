import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Box } from "@chakra-ui/layout";


const App = () => {
  const [dimentionsSidebar, setDimentionsSidebar] = useState({});
  const [ dimentionsNavbar, setDimentionsNavbar] = useState({});
  console.log(dimentionsNavbar.height + 'px', dimentionsSidebar.width + 'px');

  return (
    <>
    <Router>
      <Switch>
        <Box mt={dimentionsNavbar.height + 'px'} ml={dimentionsSidebar.width + 'px'}>
        <Route path='/' exact component={Home}/>
        <Route path='/users' component={Users} exact /> 
        </Box>
      </Switch>
    <Sidebar onChangeDimentions={setDimentionsSidebar} zIndex={100}  />
    <Navbar onChangeDimentions={setDimentionsNavbar} paddingLeft={dimentionsSidebar.width + 'px'} />
    </Router>
    </>
  )
}

export default App

