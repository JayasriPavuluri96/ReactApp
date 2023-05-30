import { useState } from "react";
import { tableData } from "../tableData";
import "./index.css";
import { VscArrowSmallDown, VscArrowSmallUp } from "react-icons/vsc";

export const Table = () => {
  const [icon, setIcon] = useState(false);

  const [selectedData, setSelectedData] = useState([{}]);

  const handleClick = () => {
    setIcon(!icon);
    handleData();
  };

  const handleData = () => {
    const sortedData = [...tableData].sort((element1, element2): any => {
      if (!icon && (element1.DOB < element2.DOB)) {
        return -1;
      } else if (icon && (element1.DOB > element2.DOB)) {
        return -1;
      } else {
        return 0;
      }
    });
      
    return sortedData;
  };

  const handleSelect = (event:any) => {
    const value = event.target.checked;
    const checkboxes = document.querySelectorAll('.row-checkbox');

    checkboxes.forEach((checkbox:any) => {
      checkbox.checked = value;
    });

    if (value) {
      setSelectedData([...tableData]);
    } else {
      setSelectedData([]);
    }
  };

  return (
    <table className="table">
      <th>
        <input type="checkbox" onClick={handleSelect} /> Gmail
      </th>
      <th> Citizenship</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>
        DOB
        <span className="Dob-icon" onClick={handleClick}>
          {icon ? <VscArrowSmallUp /> : <VscArrowSmallDown />}
        </span>
      </th>
      <th>College</th>
      <th> ZipCode</th>
      <th>Profession</th>
      <th>City</th>
      <tbody className="table-body">
        {handleData().map((option) => (
          <>
            <tr className="table-rows">
              <td>
                <input type="checkbox" className="row-checkbox" /> {option.Gmail}
              </td>
              <td>{option.Citizenship}</td>
              <td>{option.FirstName} </td>
              <td>{option.LastName}</td>
              <td>{option.DOB} </td>
              <td>{option.College}</td>
              <td>{option.Zipcode} </td>
              <td>{option.Profession}</td>
              <td>{option.City} </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
