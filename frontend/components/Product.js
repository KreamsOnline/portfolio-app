import ItemStyles from './styles/ItemStyles';
import Link from 'next/link';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import FormatMoney from '../lib/formatMoney';

function Product({ product }) {
    return (
        <ItemStyles>
          <img 
            src={product?.photo?.image?.publicUrlTransformed} 
            alt={product.name} 
          />
          <Title>
            <Link href={`/product/${product.id}`}>
                {product.name}
            </Link>
          </Title>
          <PriceTag>{FormatMoney(product.price)}</PriceTag>
          <p>{product.description}</p>
          <div className="buttonList">
            <Link 
              href={{
                pathname: 'update',
                query: {
                  id: product.id,
                }
            }}
          >
              Edit  ✏ 
          </Link>
          </div>
          {/*add buttons to edit and delete */}
        </ItemStyles>
    )
}

export default Product;