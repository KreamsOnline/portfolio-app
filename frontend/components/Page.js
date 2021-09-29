import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import SingleProduct from './SingleProduct';


const GlobalStyles = createGlobalStyle`
    
    html {
        --red: turquoise;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: '0 12px 24px 0 rgba(0,0,0,0.09)';
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-style: italic;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: var(---black);
    }
    a:hover {
        text-decoration: underline;
        color: var(--red);
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;



function Page({children, cool}) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <InnerStyles>{children}</InnerStyles>
        </div>
    )
}

export default Page;

