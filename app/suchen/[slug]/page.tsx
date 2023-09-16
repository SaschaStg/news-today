import NewsList from "@/app/NewsList";
import { fetchNews } from "../../utils/fetchNews";

interface Props {
    params: any
}

const SearchDetailPage = async ({ params }: Props) => {
    const keyword = params.slug;
    const { articles } = await fetchNews(keyword);

    return (
        <NewsList articles={articles} />
    )
}

export default SearchDetailPage