import React, { Component } from 'react';
import NavBar from './navbar';
import Linux from './linux';
import Home from './home';
import Django from './django';
import Web from './web';
import NotFound from './notFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import WebContent from './webContent';
import DjangoContent from './djangoContent';

class App extends Component {
    state = {  } 
    render() { 
        return (
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/linux" element={<Linux />}>
                    <Route path='homework' element={<h4>homework的内容</h4>}></Route>
                    <Route path='terminal' element={<h4>terminal的内容</h4>}></Route>
                    <Route path='notebook' element={<h4>notebook的内容</h4>}></Route>
                </Route>
                <Route path="/django" element={<Django />} />
                <Route path="/web" element={<Web />} />
                <Route path="/web/content/:chapter" element={<WebContent />} />
                <Route path="/django/content" element={<DjangoContent />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate replace to="/404"/>} />
              </Routes>
            </div>
          </React.Fragment>
        );
    }
}
 
export default App;