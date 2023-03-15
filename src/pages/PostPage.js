import './PostPage.scss'
import baner from '../resources/img/post_img.jpg'
import autor from '../resources/img/autor.png'







function PostPage() {
    return (
        <>
         <div className='post-item__header ms-4 mt-3'>
                        <div className='post-item__header_autor'>
                            <img src={autor} alt='#' /> 
                            <span>Post Autor</span>
                        </div>
                        <span className='post-item__header_date'>14.03.2023</span>
        </div>

        <h1 className='post-title'>Не только ChatGPT и Midjourney. 8 нейросетей для работы и творчества</h1>
       
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