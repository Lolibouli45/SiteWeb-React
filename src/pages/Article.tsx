import { Link, useParams } from "react-router-dom";
import { articles } from "../data/articles";
import ReactMarkdown from "react-markdown";

export function Article() {
    const { id } = useParams();
    const article = articles.find(a => a.id === Number(id));

    if (!article) {
        return <h1 className="font-bold text-2xl">Article introuvable</h1>;
    }

    return (
        <div className="prose-lg">
            <h1 className="font-bold text-2xl underline">{article.title}</h1>
            <ReactMarkdown>{article.content}</ReactMarkdown>

            <div className="flex gap-2 mt-4">
                {article.tags.map(tag => (
                    <Link
                        key={tag}
                        to={`/tags/${tag}`}
                        className="px-2 py-1 rounded hover:bg-primary text-sm"
                    >
                        #{tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}