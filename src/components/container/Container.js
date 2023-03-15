import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './Container.scss';
import Header from '../header/header';
import AllPostsPage from '../../pages/AllPostsPage';
import PostPage from '../../pages/PostPage';


function Container() {

    return(
        <Router>
        <div className="container">
            <Header/>
            <div className="container__wraper">
                <div className='container__content'>
                    <Routes>
                        <Route path='/' element={<AllPostsPage/>}/>
                        <Route path='/post' element={<PostPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default Container
