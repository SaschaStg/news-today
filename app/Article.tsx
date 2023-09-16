import dayjs from "dayjs";
import ReadButton from "./ReadButton";

interface Props {
    article: Article;
}

const Article = ({ article }: Props) => {
    return (
        <article className="flex flex-col rounded-lg bg-slate-100 shadow-sm transition-all duration-200 ease-out hover:scale-[102%] hover:bg-slate-200 hover:shadow-lg dark:bg-slate-700">
            {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} className="h-56 w-full rounded-t-lg object-cover shadow-md" />
            ) : (
                <img src="/images/news.jpg" alt={article.title} className="h-56 w-full rounded-t-lg object-cover shadow-md" />

            )}

            <div className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-serif font-bold">{article.title}</h2>
                    <p>{article.description}</p>
                    <div className="ml-auto flex flex-col space-x-1 pt-5 text-right text-xs italic text-gray-400">
                        <p>{article.author} -</p>
                        <p className="text-xs">{dayjs(article.publishedAt).format("DD.MM.YYYY HH:MM")} Uhr</p>
                    </div>
                </div>
                <ReadButton article={article} />
            </div>
        </article>
    )
}

export default Article
