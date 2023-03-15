import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

import './App.scss';
import Substrate from '../substrate/substrate';
import Header from '../header/header';
import AllPostsPage from '../../pages/AllPostsPage';
import PostPage from '../../pages/PostPage';


function App() {
  return (
    <div className="app">
      <Substrate/>
      <Provider store={store}>
            <Router>
                <div className="container">
                    <Header/>
                    <div className="container__wraper">
                        <div className='container__content' id="scroll-container">
                           <Suspense fallback={'loading'}>
                                <Routes>
                                    <Route path='/' element={<AllPostsPage/>}/>
                                    <Route path='/post/:postId' element={<PostPage/>}/>
                                </Routes>
                           </Suspense>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    </div>
  );
}

export default App;
