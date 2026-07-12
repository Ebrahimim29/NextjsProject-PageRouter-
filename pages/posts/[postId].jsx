// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const PostId = ({post}) => {

    // const router = useRouter()

    // 1)-------fallback:true:

    // const router = useRouter()---->>import { useRouter } from "next/router";
    // return router.isFallback ? (
    //     <h1>Loading...</h1>
    // ) : (
    
    return  (
        <div>
            <Button className="mt-2" onClick={() => router.back()}>Back</Button>
            <br />
            <br />
            {post.title}
            <br />
        </div>
    )
};

export default PostId;


export async function getStaticPaths() {

    return {
        paths : [
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}}
        ],
        // fallback: true
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    
    const {params} = context

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()

    console.log(post.id);    

    return {
        props: {
            post,
        },
    }

}