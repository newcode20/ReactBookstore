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

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section> 
  );
}

const Book = () => {
  return (
      <article className="book">
        <Image></Image>
        <Title />
        <Author />
      </article>
  );
}

const Title = () => <h1> milk and honey </h1>;
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop: '.25rem'}}> Rupi Kaur</h4>

const Image = () => <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="milk and honey book" />

//Creating a component with using no JSX and creating an element, not as easy.
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// }

ReactDom.render(<Booklist />, document.getElementById('root'));