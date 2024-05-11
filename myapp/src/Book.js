import {React} from 'react'
const Book=(props)=>{
  const clickhandler=()=>{
    alert("hello world");
  };
  const complexExample=(author)=>{
   console.log(author);
  };
  const{img,title,author}=props.book;
return (<article className='book' onMouseOver={()=>{
  console.log(title);
}}>
   <img src={img} alt=''/>
   <h1 onClick={()=>console.log(title)}>{title}</h1>
  <h4>{author}</h4>
  <button type='button' onClick={clickhandler}>referenceExample</button>
  <button type='button' onClick={()=>complexExample(author)}>moreComplexExample</button>
</article>);
};

export default Book