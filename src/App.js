import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import AboutPage from './pages/about';
import ArticlesListPage from './pages/articles-list-page';
import ArticlePage from './pages/articlepage'
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div> 
      </div>
    </Router>
    
  );
}

export default App;
