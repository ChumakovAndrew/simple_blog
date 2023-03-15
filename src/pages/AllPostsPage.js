import './AllPostPage.scss'
import postimg from '../resources/img/post_img.jpg'
import autor from '../resources/img/autor.png'
import { useDispatch, useSelector } from 'react-redux'
import {postListFetching} from '../slices/slicePostList'
import { useEffect } from 'react'

function AllPostsPage() {
    const {posts, postsLoadingStatus} = useSelector(state => state.postList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postListFetching())
        console.log(posts)
    }, [])

    
    console.log(postsLoadingStatus)
    return (
        <>
            <ul className='post-list'>
            <li className='post-item'>
                <div className='post-item__container-text'>
                    <div className='post-item__header'>
                        <div className='post-item__header_autor'>
                            <img src={autor} alt='#' /> 
                            <span>Post Autor</span>
                        </div>
                        <span className='post-item__header_date'>14.03.2023</span>
                    </div>
                    <h2 className='post-item__title_h2'>
                        <a className='post-item__title_link'>Title name: Tor Browser </a>
                    </h2>
                    


                    <p className='post-item__description'>Наверняка вы слышали, что в TOR не протолкнуться от сотрудников полиции и агентов ФБР. В то же время, говорят, что на Серьезные хакерские форумы пускают только своих, и безопасникам нечего ловить в даркнете. И в том, и в другом есть доля истины, но в чем она заключается? Есть ли польза от мониторинга даркнета?</p>
                </div>
                <div className='post-item__container-img'>
                    <img src={postimg} alt='#' />
                </div>
            </li>
            <li className='post-item'>
                <div className='post-item__container-text'>
                    <h2 className='post-item__title_h2'>
                        <a className='post-item__title_link'>title name</a>
                    </h2>
                    <p className='post-item__description'>Наверняка вы слышали, что в TOR не протолкнуться от сотрудников полиции и агентов ФБР. В то же время, говорят, что на Серьезные хакерские форумы пускают только своих, и безопасникам нечего ловить в даркнете. И в том, и в другом есть доля истины, но в чем она заключается? Есть ли польза от мониторинга даркнета?</p>
                </div>
                <div className='post-item__container-img'>
                    <img src={postimg} alt='#' />
                </div>
            </li>
            <li className='post-item'>
                <div className='post-item__container-text'>
                    <h2 className='post-item__title_h2'>
                        <a className='post-item__title_link'>title name</a>
                    </h2>
                    <p className='post-item__description'>Наверняка вы слышали, что в TOR не протолкнуться от сотрудников полиции и агентов ФБР. В то же время, говорят, что на Серьезные хакерские форумы пускают только своих, и безопасникам нечего ловить в даркнете. И в том, и в другом есть доля истины, но в чем она заключается? Есть ли польза от мониторинга даркнета?</p>
                </div>
                <div className='post-item__container-img'>
                    <img src={postimg} alt='#' />
                </div>
            </li>
            <li className='post-item'>
                <div className='post-item__container-text'>
                    <h2 className='post-item__title_h2'>
                        <a className='post-item__title_link'>title name</a>
                    </h2>
                    <p className='post-item__description'>Наверняка вы слышали, что в TOR не протолкнуться от сотрудников полиции и агентов ФБР. В то же время, говорят, что на Серьезные хакерские форумы пускают только своих, и безопасникам нечего ловить в даркнете. И в том, и в другом есть доля истины, но в чем она заключается? Есть ли польза от мониторинга даркнета?</p>
                </div>
                <div className='post-item__container-img'>
                    <img src={postimg} alt='#' />
                </div>
            </li>
            <li className='post-item'>
                <div className='post-item__container-text'>
                    <h2 className='post-item__title_h2'>
                        <a className='post-item__title_link'>title name</a>
                    </h2>
                    <p className='post-item__description'>Наверняка вы слышали, что в TOR не протолкнуться от сотрудников полиции и агентов ФБР. В то же время, говорят, что на Серьезные хакерские форумы пускают только своих, и безопасникам нечего ловить в даркнете. И в том, и в другом есть доля истины, но в чем она заключается? Есть ли польза от мониторинга даркнета?</p>
                </div>
                <div className='post-item__container-img'>
                    <img src={postimg} alt='#' />
                </div>
            </li>
            </ul>

        </>
    )
}

export default AllPostsPage