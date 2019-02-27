import React , {Fragment} from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard/index';

// import Search from './components/Search';
// import MemeMaker from  './components/MemeMaker';
// import MemeShare from  './components/MemeShare';
// import Footer from './components/Footer';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
// import Search from './components/Search';

const App = ()=>{
   return (
        <Fragment>
        <BrowserRouter>
            <div>
             <Switch>
                 <Route exact path="/" component={Login} />
                 <Route path="/d" component={Dashboard} />
             </Switch>
            </div>
        </BrowserRouter>
        </Fragment>
   )
}

export default App;
