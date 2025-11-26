import { Route, Routes } from "react-router-dom"

import { NavBar } from "./components/NavBar"

import { Home } from "./pages/Home"
import { Article } from "./pages/Article"
import { ArticlesList } from "./pages/ArticlesList"
import { LatestArticle } from "./pages/LatestArticle"
import { Contact } from "./pages/Contact"
import { Tag } from "./pages/Tag";
import { SearchTags } from "./pages/SearchTags";

function App() {
    return (
        <div className="px-15 py-8">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Liste des articles */}
                <Route path="/articles" element={<ArticlesList />} />

                {/* Article par ID */}
                <Route path="/articles/:id" element={<Article />} />

                {/* Dernier article */}
                <Route path="/articles/latest" element={<LatestArticle />} />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />

                <Route path="/tags/:tag" element={<Tag />} />

                <Route path="/search-tags" element={<SearchTags />} />
            </Routes>
        </div>
    )
}

export default App