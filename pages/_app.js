export default function MyApp({ Component, pageProps }) {
    return (

        <>
            Header
            <Component {...pageProps} />
            Footer
        </>
    )
}