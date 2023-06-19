import { ChangeEvent, useState } from "react";
import { PageSizeValues, UserValues } from "./constants";
import { DatePicker } from "./DatePicker/DatePicker";
import { Pagination } from "./Pagination";
import { Table } from "./Table";
import { DatePickerRange } from "./DatePicker/DatePickerRange";
import { SingleSelect } from "./SelectComponent/SingleSelect";
import { Route, Routes } from "react-router";
import { Home } from "./HomeComponent/home";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<{
    from_date: Date;
    to_date: Date;
  }>({ from_date: new Date(), to_date: new Date() });
  const [selectedUser, setSelectedUser] = useState(UserValues[0]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route
          path="/singleselect"
          element={
            <SingleSelect
              users={UserValues != undefined ? UserValues : []}
              render={(user: { id: number; Name: string }) => user.Name}
              user={selectedUser}
              onChange={(o) => setSelectedUser(o)}
            />
          }
        />
        <Route
          path="/datepickerrange"
          element={
            <DatePickerRange
              from_date={dateRange.from_date}
              to_date={dateRange.to_date}
              onChange={(fromDate: Date, toDate: Date) => {
                setDateRange({ from_date: fromDate, to_date: toDate });
              }}
            />
          }
        />
        <Route
          path="/datepicker"
          element={
            <DatePicker
              date={selectedDate}
              onChange={(p) => setSelectedDate(p)}
            />
          }
        />
        <Route
          path="/pagination"
          element={
            <Pagination
              PageSizeOptions={PageSizeValues}
              defaultPageSize={"100"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

/*
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
      <SingleSelect
        users={UserValues != undefined ? UserValues : []}
        render={(user: { id: number; Name: string }) => user.Name}
      />*/
