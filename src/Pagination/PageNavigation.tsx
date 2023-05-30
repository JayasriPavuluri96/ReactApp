import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { PageInput } from "./PageInput";
import { useState } from "react";



export const PageNavigation = () => {
  const pageCount = 10;
  const [number, setNumber] = useState(1);

  const prevPage = () => {
    
    if (number > 1) {
      setNumber(Number(number) - 1);
      
    }
  };

  const nextPage = () => {
    if (number < pageCount) {
      setNumber(Number(number) + 1);
    }
  };

  const lastPage = () => {
    setNumber(pageCount);
  };

  const firstPage = () => {
    setNumber(1);
  };

  return (
    <div className="page-nav"> 
      <AiOutlineDoubleLeft className={`page-arrows ${Number(number) === 1 ? "disable-arrows" : ""}`} onClick={firstPage} />
      <AiOutlineLeft className={`page-arrows ${Number(number) === 1 ? "disable-arrows" : ""}`} onClick={prevPage} />
       <span className="page-content"> Page </span>
      <PageInput number={number} setNumber={setNumber} pageCount={pageCount}/>
       <span className="page-content"> of 10 </span>
      <AiOutlineRight className={`page-arrows ${Number(number) === pageCount ? "disable-arrows" : ""}`} onClick={nextPage} />
      <AiOutlineDoubleRight className={`page-arrows ${Number(number) === pageCount ? "disable-arrows" : ""}`} onClick={lastPage} />
    </div>
  );
};
