import { useState } from "react";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

export function SearchTags() {
    const [query, setQuery] = useState("");

    // filtrer en fonction du tag
    const filtered = articles.filter(article =>
        article.tags.some(tag =>
            tag.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <div>
            <h1>Recherche par tags</h1>

            <input
                type="text"
                placeholder="Rechercher un tag..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input input-bordered mt-4 mb-4"
            />

            <ul>
                {filtered.map(article => (
                    <li key={article.id} className="py-1 hover:text-info">
                        <Link to={`/articles/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>

            {filtered.length === 0 && (
                <p>Aucun article trouvé pour ce tag.</p>
            )}
        </div>
    );
}