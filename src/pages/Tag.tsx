import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

export function Tag() {
    const { tag } = useParams();

    // Filtrer les articles contenant ce tag
    const filtered = articles.filter(article =>
        article.tags.includes(tag as string)
    );

    return (
        <div>
            <h1>Articles avec le tag “{tag}”</h1>
            <div className="divider"></div>
            {filtered.length === 0 && (
                <p>Aucun article trouvé pour ce tag.</p>
            )}

            <ul>
                {filtered.map(a => (
                    <li key={a.id} className="hover:text-accent pt-3">
                        <Link to={`/articles/${a.id}`}>{a.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
