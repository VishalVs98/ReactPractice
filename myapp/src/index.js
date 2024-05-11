import React from 'react';
import ReactDom from 'react-dom';
import './index.css'; 
function BookList(){
  return (
  <section className='booklist'>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
  </section>
  );
  };
  const Book=()=>{
    return (<article className='book'>
      <Image/>
      <Title/>
      <Autor/>
    </article>);
  };
  const Image=()=>(
   <img src='https://images-na.ssl-images-amazon.com/images/I/81RrEEMiOCL._AC_UL600_SR600,400_.jpg' alt=''/>
  );
  const Title=()=><h1>A Court of Thorns and Roses</h1>;
  const Autor=()=><h4 style={{color:'#6167d98',fontSize:'0.75rem'}}>Sarah J. Maas</h4>;
ReactDom.render(<BookList/>,document.getElementById('root'));
