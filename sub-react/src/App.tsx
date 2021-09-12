import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Blank from './pages/blank'

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/blank' component={Blank} />
            </Switch>
        </Router>
    )
}

export default App
