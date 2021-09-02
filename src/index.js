import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css'

//Stateless functional component
//always return JSX
//JSX RULES:
//return single element
//div / section / article or Fragment
//className instead of class
// use camelCase for html attribute 
//close every element

// function Greeting() {
//   return <h4>This is Kimberly and this is my first component</h4>;
// }

//set up vars
const firstBook = {
author: 'Rupi Kaur',
title:'milk and honey',
img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
};

const secondBook = {
author: 'Colleen Hoover',
title:'Verity',
img: "https://images-na.ssl-images-amazon.com/images/I/41N1GA7CaNS._SX322_BO1,204,203,200_.jpg"
};

function Booklist() {
  return (
    <section className="booklist">
{/* want name prop or pass it in where the component is being rendered, but you are accessing it in the component first  */}
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section> 
  );
}

const Book = (props) => {
  
  return (
      <article className="book">
        <img src={props.img} alt="milk and honey book" />
        <h1> {props.title} </h1>
        <h4>{props.author.toUpperCase()} </h4>
        
      </article>
  );
}


//Creating a component with using no JSX and creating an element, not as easy.
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// }

ReactDom.render(<Booklist />, document.getElementById('root'));