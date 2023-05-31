import { useState } from "react";
import { PageSizeValues } from "./constants";
import { DatePicker } from "./DatePicker/DatePicker";
import { Pagination } from "./Pagination";
import { Table } from "./Table";
import { DatePickerRange } from "./DatePicker/DatePickerRange";
import { SelectOptions } from "./SelectComponent/AddListItemsToSelect";



function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<{
    from_date: Date;
    to_date: Date;
  }>({ from_date: new Date(), to_date: new Date() });

  return (
    <div className="App">
      <Table />
      <Pagination PageSizeOptions={PageSizeValues} defaultPageSize={"100"} />
      <DatePicker date={selectedDate} onChange={(p) => setSelectedDate(p)} />
      <DatePickerRange
        from_date={dateRange.from_date}
        to_date={dateRange.to_date}
        onChange={(fromDate: Date, toDate: Date) => {
          setDateRange({ from_date: fromDate, to_date: toDate });
        }}
      />
      <SelectOptions/>
    </div>
  );
}

export default App;
