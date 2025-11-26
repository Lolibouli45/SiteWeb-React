import { Send } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <div className="py-8">
                <h1 className="font-bold text-2xl">Ce que nous proposons ?</h1>
                <section className="flex pt-5 pr-20 gap-45">
                    <div>
                        <p>
                            Sur ce site, nous vous proposons des résumés des cours du lycée LPO Louise Michel de Gisors, niveau seconde, dans toutes les matières. Le site est régulièrement mis à jour à chaque nouvelle leçon par nos agents.
                        </p>
                        <Link to="/articles/latest" className="btn btn-soft btn-success mt-5">
                            <Send />
                            Voir le dernier Article
                        </Link>
                    </div>
                    <img
                        src="deventure.jpg"
                        alt="Image de la deventure du lycée LPO Louise Michel de Gisors"
                        className="w-4xl h-3xl rounded-lg border-3 border-primary"
                    />
                </section>
            </div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <ul>
                    <Link className="footer-title link-hover" to="/contact">Contactez-nous</Link>
                    <li>Email: loliboulidu45@gmail.com</li>
                    <li>N° de téléphone: 06.27.99.33.64</li>
                </ul>
            </footer>
        </div>
    );
}