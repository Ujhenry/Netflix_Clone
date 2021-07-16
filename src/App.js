import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import RowBelow from './Row_Below';
import Row from './Row';
import Faq from './Faq';
import Row3 from './Row3';
import Row4 from './Row4';
import Footer from './Footer';


function App() {
  return (
    <Router>
        <div className ="App">

        <Switch>

            <Route path ="/">
                <Header/>
                <RowBelow/>
                <Row/>
                <Row3/>
                <Row4/>
                <Faq/>
                <Footer/>
            </Route> 

        </Switch>


        </div>

    </Router>
  );
}

export default App;
