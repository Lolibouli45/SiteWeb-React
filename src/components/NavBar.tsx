import { Aperture, Headset, ScrollText, Search, Send } from "lucide-react";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div className="w-full flex-col ">
            <div className="flex justify-between">
                <Link to="/" className="btn btn-soft btn-primary flex gap-4">
                    <Aperture />
                    <h1 className="font-bold">ReviseWithMe</h1>
                </Link>
                <div className="flex gap-1">
                    <Link to="/search-tags" className="flex btn btn-outline btn-accent">
                        <Search className="mr-2" />
                        Tags
                    </Link>
                    <Link to="/articles" className="flex btn btn-soft btn-accent">
                        <ScrollText />
                        Articles
                    </Link>
                    <Link to="/articles/latest" className="flex btn btn-soft btn-accent">
                        <Send />
                        Dernier article
                    </Link>
                    <Link to="/contact" className="flex btn btn-soft btn-accent">
                        <Headset />
                        Contacter-nous
                    </Link>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}