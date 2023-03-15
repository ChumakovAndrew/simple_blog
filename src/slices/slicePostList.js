import {createSlice} from "@reduxjs/toolkit"
import pimg from '../resources/img/post_img.jpg'

const initialState = {
    postsLoadingStatus: 'idle',
    posts: [
        {
            desctiption: {
                id: '10259935',
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: pimg
            },
            content: [
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                },
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                }
            ]
        },
        {
            desctiption: {
                id: '10259939',
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: pimg
            },
            content: [
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                },
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                }
            ]
        },
        {
            desctiption: {
                id: '10259931',
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: pimg
            },
            content: [
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                },
                {
                    h4: 'Написать музыку — MuseNet',
                    p: 'В последние месяцы ChatGPT и Midjourney — лидеры по упоминаниям среди нейросетей. Но это не единственные инструменты, которые можно использовать для хобби и работы.'  
                }
            ]
        },
    ]
    
}
const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {
        postListFetching: state => {state.postsLoadingStatus = 'loading'},

    }
})

const {actions, reducer} = postListSlice

export default reducer
export const {
    postListFetching
} = actions


















