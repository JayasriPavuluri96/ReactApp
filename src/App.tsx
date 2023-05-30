import { useState } from "react";
import { PageSizeValues } from "./constants";
import { DatePicker } from "./DatePicker";
import { Pagination } from "./Pagination";
import { Table } from "./Table";




function App() {
  const [selectedDate,setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="App">
      <Table />
      <Pagination PageSizeOptions={PageSizeValues} defaultPageSize={"100"} />
      <DatePicker date={selectedDate} onChange={(p)=>setSelectedDate(p)}/>
    </div>
  );
}

export default App;
