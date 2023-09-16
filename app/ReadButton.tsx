import Link from "next/link";

interface Props {
    article: Article;
}

const ReadButton = ({ article }: Props) => {
    return (
        <Link className="flex justify-center items-center text-center h-10 rounded-b-lg bg-orange-400 text-white hover:bg-orange-500"
            href={`/artikel/${encodeURIComponent(article.title)}/${encodeURIComponent(article.url)}/${encodeURIComponent(article.description)}/${encodeURIComponent(article.author)}/${encodeURIComponent(article.urlToImage)}/${encodeURIComponent(article.publishedAt)}`}>Mehr dazu</Link>
    )
}

export default ReadButton
