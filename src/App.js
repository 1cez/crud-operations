import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";
import EmpListing from "./EmpListing";
function App() {
  return (
    <div>
      <h1 className="text-center">React JS Crud Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
