import Link from "next/link";

interface Props {
    category: Category;
    isActive: boolean;
}

const NavItem = ({ category, isActive }: Props) => {
    return (
        <Link className={`navLink ${isActive && 'text-lg font-bold underline decoration-blue-500 navLink'}`}
            href={`/suchen?${category.toLowerCase()}`}>
            {category}
        </Link>
    )
}

export default NavItem
