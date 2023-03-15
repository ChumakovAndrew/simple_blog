import './PostPage.scss'
import baner from '../resources/img/post_img.jpg'
import autor from '../resources/img/autor.png'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';






function PostPage() {
    const {posts} = useSelector(state => state.postList)
    const {Id} = useParams()

    const {} = posts.find(element => element.id === Id)


    return (
        <>
         <div className='post-item__header ms-4 mt-3'>
                        <div className='post-item__header_autor'>
                            <img src={autor} alt='#' /> 
                            <span>Post Autor</span>
                        </div>
                        <span className='post-item__header_date'>14.03.2023</span>
        </div>

        <h1 className='post-title'></h1>
       
        <p className='post-description'>
        
        </p>
       
        <section className='baner'>
        <img alt='#' src={baner} />
        
        <div className='baner__subtitles'>
            <h4></h4>
        </div>
        
        </section>

        <section className='content'>
        <h2></h2>
        <p></p>
        <img src='' alt='' />


        </section>
        </>
    )
}

export default PostPage