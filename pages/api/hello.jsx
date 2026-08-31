export default function handler(req, res) {
    
    console.log(req.method);

    if(req.method != "POST"){
        return res.status(405).json("Method Not Allowed");
    }
   
    res.status(200).json({ name: "Mohammad MirEbrahimi"});
}