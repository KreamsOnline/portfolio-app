import NavStyles from './styles/NavStyles';
import Link from 'next/dist/client/link';

function Nav() {
    return (
        <NavStyles>
            <Link href="/products">Products</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">orders</Link>
            <Link href="/account">Account</Link>
        </NavStyles>
    )
}

export default Nav;
