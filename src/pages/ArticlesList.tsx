import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export function ArticlesList() {
    return (
        <div>
            <h1>Liste des articles</h1>
            <div className="divider"></div>
            <ul className="pt-3">
                {articles.map(article => (
                    <li key={article.id} className="hover:text-accent pt-2">
                        <Link to={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}