import { useHttp } from "../hooks/useHttp";

const useFireBaseServise = () => {

    const {request} = useHttp()

    const  getAllPosts = () => {
        request(' https://firestore.googleapis.com/v1/projects/simpleblog-45039/databases/(default)/documents/posts' ).then((res) => {
            console.log(res)
        })
    }

    return {getAllPosts}

}

export default useFireBaseServise