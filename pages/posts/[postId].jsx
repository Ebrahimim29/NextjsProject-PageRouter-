import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const PostId = ({ post }) => {
    const router = useRouter();

    // 1)-------fallback:true:
    // const router = useRouter()---->>import { useRouter } from "next/router";
    // return router.isFallback ? (
    //     <h1>Loading...</h1>
    // ) : (

    return (
        <div className="d-flex justify-content-center align-items-center flex-column p-3">
            <Button className="mt-2" onClick={() => router.back()}>
                Back
            </Button>
            <br />
            <br />
            <h3>{post.title}</h3>
            <p className="mt-3" style={{ maxWidth: 600, whiteSpace: "pre-line" }}>
                {post.body}
            </p>
        </div>
    );
};

export default PostId;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { postId: "1" } },
            { params: { postId: "2" } },
            { params: { postId: "3" } },
        ],
        // fallback: true
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    const { params } = context;

    const res = await fetch(`http://localhost:4000/posts/${params.postId}`);

    if (!res.ok) {
        return { notFound: true };
    }

    const post = await res.json();

    if (!post || !post.id) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
        revalidate: 30,
    };
}
