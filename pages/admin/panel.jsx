import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import useSWR from "swr";

const handleGetData = async () => {
    const res = await fetch("http://localhost:4000/admin");
    const resData = await res.json();
    return resData;
}


const Panel = () => {

    const router = useRouter()
    const {data, isLoading, error, isValidating} = useSWR('admin', handleGetData)
    
    return isLoading ?(
        <h1 className="mt-5 text-center text-success">Loading...</h1>
    ) : (
        <div>
            <h1>Use SWR to fetch data</h1>

            <Button className="mt-2" onClick={()=>router.back()}>
                Back
            </Button>

            <ul>
                {Object.keys(data).map(key=>(
                    <li>{`${key} : ${data[key]}`}</li>
                ))}
            </ul>
            
            {isValidating && (<h1 className="mt-5 text-center">Loading...</h1>)}

        </div>
    )
    
}

export default Panel;