import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

import './Container.scss';
import Header from '../header/header';
import AllPostsPage from '../../pages/AllPostsPage';
import PostPage from '../../pages/PostPage';
import { Suspense } from 'react';



function Container() {

    return(
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Header/>
                    <div className="container__wraper">
                        <div className='container__content'>
                           <Suspense fallback={'loading'}>
                                <Routes>
                                    <Route path='/' element={<AllPostsPage/>}/>
                                    <Route path='/post/:id' element={<PostPage/>}/>
                                </Routes>
                           </Suspense>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    )
}

export default Container
