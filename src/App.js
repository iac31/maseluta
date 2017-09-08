import React, { Component } from 'react';
import { Block, Flex } from 'jsxstyle';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import './css/icomoon.css';
import './css/index.css';
import './css/responsive.css';
import Nav from './components/Nav';
import Home from './screens/Home';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <Block>
                    <Nav/>
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={Home} />
                        <Route
                            render={function() {
                                return <p>Not Found</p>;
                            }}
                        />
                    </Switch>
                </Block>
            </Router>
        )
    }
}

export default App;
