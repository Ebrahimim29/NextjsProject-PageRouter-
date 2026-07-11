import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const PostId = ({post}) => {

    const router = useRouter()

    return(
        <div>
            <Button className="mt-2" onClick={()=>router.back()}>Back</Button>
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
        fallback: true
    }
}

export async function getStaticProps(context) {
    
    const {params} = context

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()

    return {
        props: {
            post,
        },
    }

}