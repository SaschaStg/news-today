import Article from "./Article"

interface Props {
    articles: Article[]
}

const NewsList = ({ articles }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
                <Article key={index} article={article} />))}
        </div>
    )
}

export default NewsList
