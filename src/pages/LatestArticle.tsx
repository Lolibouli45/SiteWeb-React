import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import { articles } from "../data/articles";

export function LatestArticle() {
    const last = articles[articles.length - 1];

    return (
        <div className="prose-lg">
            <h1 className="font-bold text-2xl underline">{last.title}</h1>
            <ReactMarkdown>{last.content}</ReactMarkdown>

            <div className="flex gap-2 mt-4">
                {last.tags.map(tag => (
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