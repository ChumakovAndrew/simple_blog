import './AllPostPage.scss'
// import postimg from '../resources/img/post_img.jpg'
import authorImg from '../resources/img/autor.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function AllPostsPage() {
    const {posts} = useSelector(state => state.postList)
    
    const renderPostItem = (data) => {
        
        const items = data.map((item, i) => {
            const {
                id,
                author,
                date,
                postTitle,
                postDescr,
                banerImg,
            } = item.description
                
            return(
                <li className='post-item' key={id}>
                    <div className='post-item__container-text'>

                        <div className='post-item__header'>
                            <div className='post-item__header_autor'>
                                <img src={authorImg} alt='#' /> 
                                <span>{author}</span>
                            </div>
                            <span className='post-item__header_date'>{date}</span>
                        </div>

                        <h2 className='post-item__title_h2'>
                            <Link to={"/post/" + id}>
                                {postTitle}
                            </Link>
                        </h2>

                        <p className='post-item__description'>{postDescr}</p>
                    
                    </div>

                    <div className='post-item__container-img'>
                        <img src={banerImg} alt='#' />
                    </div>
            </li>
            )
        })

        return items
    }

    const postItems = renderPostItem(posts)

    return (
        <>
            <ul className='post-list'>
                {postItems}
            </ul>

        </>
    )
}

export default AllPostsPage