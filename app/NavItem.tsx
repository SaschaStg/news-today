import Link from "next/link";

interface Props {
    category: Category;
}

const NavItem = ({ category }: Props) => {
    return (
        <Link className="text-lg font-bold underline decoration-blue-500 underline-offset-4 navLink" href={`/suchen?${category.toLowerCase()}`}>
            {category}
        </Link>
    )
}

export default NavItem
