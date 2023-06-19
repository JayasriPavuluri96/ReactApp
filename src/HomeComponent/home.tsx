import { useNavigate } from "react-router";
import './home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <menu>
      <button className="button-class" onClick={()=>{navigate("/singleselect")}}>
        Select Component
        </button>
      <button className="button-class" onClick={()=>{navigate("/table")}}>
        Table Component
      </button>
      <button className="button-class" onClick={()=>{navigate("/datepickerrange")}}>
        DatePickerRange Component
      </button>
      <button className="button-class" onClick={()=>{navigate("/pagination")}}>
        Pagination Component
      </button>
      <button className="button-class" onClick={()=>{navigate("/datepicker")}}>
        DatePicker Component
      </button>
      </menu>
    </div>
  );
};
