import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (

        <>
            Header
            <Component {...pageProps} />
            Footer
        </>
    )
}