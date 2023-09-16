import dayjs from "dayjs";

interface Props {
    params: any
}

const ArticleDetailPage = ({ params }: Props) => {
    const article = params.slug;
    const title = decodeURIComponent(article[0]);
    const url = decodeURIComponent(article[1]);
    const description = decodeURIComponent(article[2]);
    const author = decodeURIComponent(article[3]);
    const urlToImage = decodeURIComponent(article[4]);
    const publishedAt = decodeURIComponent(article[5]);
    return (
        <article>
            <div className="pt-10">
                {urlToImage !== "null" ? (
                    <img src={urlToImage} alt={title} className="h-72 w-10/12 rounded-t-lg object-cover shadow-md mx-auto" />
                ) : (
                    <img src={"/images/news.jpg"} alt={"placeholder"} className="h-72 w-10/12 rounded-t-lg object-cover shadow-md mx-auto" />
                )}
            </div>
            <div className="px-10 py-10">
                <h1 className="pb-2 text-lg font-semibold">{title}</h1>
                <p className="text-sm">{description}</p>
                <a href={url} className="pt-2 text-sm text-blue-500">Gesamte Beschreibung lesen</a>
                <div className="py-5">
                    <h3 className="text-sm font-light italic">Von: {author}</h3>
                    <h3 className="text-sm font-light italic">Datum: {dayjs(article.publishedAt).format("DD.MM.YYYY HH:MM")} Uhr</h3>
                </div>
            </div>
        </article>
    )
}

export default ArticleDetailPage
