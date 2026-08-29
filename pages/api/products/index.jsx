export default function handler(req, res) {

    res.status(200).json([
        {title: "product1", price: 10_000_000},
        {title: "product2", price: 20_000_000},
        {title: "product3", price: 30_000_000},
        {title: "product4", price: 40_000_000}
    ])
}

// 8:00 part2