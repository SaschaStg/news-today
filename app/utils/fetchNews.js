export const fetchNews = async (keyword) => {
    const today = new Date().toISOString().slice(0, 10); // 2023-01-01
    const toDate = "2023-01-01";
    const pageSize = "20";
    const language = "de";
    const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${today}&to=${toDate}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`)
    const news = res.json()
    console.log(keyword)
    return news;
}