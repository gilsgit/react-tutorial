import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

const BookList = () =>{
    return (<section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
    );
}

const title = "Fourth Wing";
const author = 'Rebecca Yarros';
const img = "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL900_SR900,600_.jpg";

const Book = () =>{
    

    return (
    <article className="book">
        <img 
        src={img}
        alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>

    </article>
    );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);


