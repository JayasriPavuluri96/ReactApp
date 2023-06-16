import { ChangeEvent, useState } from "react";
import { PageSizeValues, UserValues } from "./constants";
import { Pagination } from "./Pagination";
import { Table } from "./Table";
import { DatePickerRange } from "./DatePicker/DatePickerRange";
import { SingleSelect } from "./SelectComponent/SingleSelect";
import { Select } from "./SelectComponent/Select";
import { DatePicker } from "./DatePicker/DatePicker";
import { User } from "./SelectComponent/types";
import { SampleSelect, SelectOption } from "./SelectComponent/SampleSelect";
import { MultiSelect } from "./SelectComponent/MultiSelect";
import { UserSelect } from "./SelectComponent/SimpleSelect";
import { MultiUserSelect } from "./SelectComponent/MultiSimpleSelect";
import { CustomUserSelect } from "./SelectComponent/CustomSelect";
import { CustomMultiSelect } from "./SelectComponent/CustomMultiSelect";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateRange, setDateRange] = useState<{
    from_date: Date;
    to_date: Date;
  }>({ from_date: new Date(), to_date: new Date() });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([UserValues[0]]);

  const handleSelect = (user: User | null) => {
    setSelectedUser(user);
  };

  const options = [
    { label: "option1", value: 1 },
    { label: "option2", value: 2 },
    { label: "option3", value: 3 },
    { label: "option4", value: 4 },
    { label: "option5", value: 5 },
    { label: "option6", value: 6 },
    { label: "option7", value: 7 },
  ];
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);

  return (
    <div className="App">
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
        onSelect={handleSelect}
        render={(user: User) => user.Name}
      />
      <SampleSelect
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />{" "}
      <br />
      <UserSelect
        users={UserValues != undefined ? UserValues : []}
        selectedUser={selectedUser as User}
        onChange={(o) => setSelectedUser(o)}
      /><br/>
      <MultiUserSelect
        users={UserValues != undefined ? UserValues : []}
        selectedUsers={selectedUsers}
        onChange={(o) => setSelectedUsers(o)}
      /> <br/>
       <CustomUserSelect
      users={UserValues != undefined ? UserValues : []}
      selectedUser={selectedUser as User}
      onChange={(o) => setSelectedUser(o)}
    /><br/>
    <CustomMultiSelect users={UserValues != undefined ? UserValues : []}
        selectedUsers={selectedUsers}
        onChange={(o) => setSelectedUsers(o)}/>
    </div>
  );
}

export default App;

/*<Table /> <MultiSelect
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      */
//<Pagination PageSizeOptions={PageSizeValues} defaultPageSize={"100"} />
