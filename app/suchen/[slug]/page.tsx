import { fetchNews } from "../../utils/fetchNews";

interface Props {
    params: any
}

const SearchDetailPage = async ({ params }: Props) => {
    const keyword = params.slug;
    const { articles } = await fetchNews(keyword);
    console.log(articles)
    return (
        <div>SearchDetailPage</div>
    )
}

export default SearchDetailPage