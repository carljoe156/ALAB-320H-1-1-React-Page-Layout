import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeListItem from "./EmployeeListItem";

function HomePage() {
  return (
    <div className="page">
      <div>
        <Header headerTitle="Employee List" />
        <SearchBar />
        <EmployeeList />
      </div>
      <div>
        <Header headerTitle="Employee" />
        <EmployeeListItem />
      </div>
    </div>
  );
}

export default HomePage;
