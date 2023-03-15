import omen from "../../img/Omen.png"


const post = [
    {
        h2: "hello world",
        p: "esemble a link, use a button and change it with appropriate styles. Learn more: esemble a link, use a button and change it with appropriate styles. Learn more: esemble a link, use a button and change it with appropriate styles. Learn more: esemble a link, use a button and change it with appropriate styles. Learn more:",
        img: {alt: "#", src: omen}
    },
    {
        h2: "hello world 2",
        p: " - 2 "
    },
    {
        h2: "hello world 2",
        p: " - 2 "
    },
    {
        h2: "hello world 2",
        p: " - 2 "
    },
    {
       img: {alt: "#", src: omen}
    },
    
]

const renderPostPage = (post) => {
        
    return post.map((elem, index) => {

        const key = Object.keys(elem)

            const items = key.map((item, i) => {
                if(item === "h2"){
                    return <h2 key={item + '-' + index + '-' + i} >{elem[item]}</h2>
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

            
        return <Fragment key={index}>{items}</Fragment>
    })


}

const rpp = renderPostPage(post)