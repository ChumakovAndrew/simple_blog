import './PostPage.scss'

import autor from '../resources/img/autor.png'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import {Events,scroller } from 'react-scroll'



function PostPage() {
    const {posts} = useSelector(state => state.postList)
    const {postId} = useParams()

    const {description, content} = posts.find(element => element.description.id === postId)
    const {
        author,
        date,
        postTitle,
        postDescr,
        banerImg,
    } = description


    const scrollToWithContainer = (index) => {

        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 400,
            delay: 0,
            smooth: 'linear'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo(`h2-${index}`, {
            duration: 300,
            delay: 0,
            isDynamic: true,
            smooth: 'linear',
            containerId: 'scroll-container'
          }));
    }

    const renderContentPage = (data) => {
        
        return data.map((elem, index) => {
            const key = Object.keys(elem)
    
            const items = key.map((item, i) => {
                if(item === "h2"){
                    return <h2 name={item + '-' + index} key={item + '-' + index + '-' + i} >{elem[item]}</h2>
                }
                else if(item === "img"){
                    const {alt, src} = elem[item]

                    return <img key={item + '-' + index + '-' + i} 
                                alt={alt}
                                src={src}/>
                }
                else{
                    return <p key={item + '-' + index + '-' + i} >{elem[item]}</p>}
            })
   
            return <Fragment key={index + 5}>{items}</Fragment>  // key подправить
        })
    }

    const renderSubtitles = (data) => {
        let subtitles = []

        data.forEach(element => {
            if(element.h2){
                subtitles.push(element.h2)
            }
        });

        return subtitles.map((item, i) => {

            return (
                <a key={i} onClick={() => scrollToWithContainer(i)}>
                    <h4>{item}</h4>
                </a>
            )      
        })
    }

    const contentPage = renderContentPage(content)
    const subtitles = renderSubtitles(content)


    return (
        <>
        <div className='post-item__header ms-4 mt-3'>
                        <div className='post-item__header_autor'>
                            <img src={autor} alt='#' /> 
                            <span>{author}</span>
                        </div>
                        <span className='post-item__header_date'>{date}</span>
        </div>

        <h1 className='post-title'>{postTitle}</h1>
       
        <p className='post-description'>{postDescr}</p>
       
        <section className='baner'>
        <img alt='#' src={banerImg} />
        
        <div className='baner__subtitles'>
            {subtitles}
        </div>
        </section>

 
        <section className='content'>
            {contentPage}
        </section>
        </>
    )
}

export default PostPage