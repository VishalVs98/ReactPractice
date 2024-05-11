import ReactDom from 'react-dom';
import './index.css'; 
import {books} from './books'//named import
import SpecifiedBook from './Book'//default import
import {greeting} from './testing/testing'
function BookList(){
  console.log(greeting);
  return (
  <section className='booklist'>
   {books.map((book)=>{
    return <SpecifiedBook key={book.id} book={book}></SpecifiedBook>;
   })}
  </section>
  );
  }
    
  
ReactDom.render(<BookList/>,document.getElementById('root'));
