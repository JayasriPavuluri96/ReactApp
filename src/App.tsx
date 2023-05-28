import { PageSizeValues } from "./constants";
import { Pagination } from "./Pagination";

function App() {
  return (
    <div className="App">
      <Pagination PageSizeOptions={PageSizeValues} defaultPageSize={"100"} />
    </div>
  );
}

export default App;
