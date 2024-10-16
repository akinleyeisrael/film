import { Button } from "@/components/ui/button";
import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <nav className="bg-background text-primary">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center py-4">
                        <ul className="flex space-x-4">
                            <li>
                                <Button variant="ghost" asChild>
                                    <Link href="/">HOME </Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" asChild>
                                    <Link href="/about">ABOUT</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="ghost" asChild>
                                    <Link href="/contact">FULL GALLERY</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
