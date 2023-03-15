import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    postsLoadingStatus: 'idle',
    posts: {
        '10259935': {
            desctiption: {
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: '#'
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
        '10259936': {
            desctiption: {
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: '#'
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
        '10259937': {
            desctiption: {
                author: 'Post Autor',
                date: '00.00.00',
                postTitle: 'Post Title',
                postDescr: 'Post Description',
                banerImg: '#'
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
        }
    }
    
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


















