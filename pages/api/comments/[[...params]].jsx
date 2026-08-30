export default function handler(req, res) {
    const {params} = req.query

    console.log(params);
    
    res.status(201).json({id:1, title: "product1", price: 10_000_000});
}