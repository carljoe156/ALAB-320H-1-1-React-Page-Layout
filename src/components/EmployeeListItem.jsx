function EmployeeListItem() {
  return (
    <div className="employee">
      <img
        src="https://images.unsplash.com/photo-1579273166085-f686ab8435b4?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        style={{ width: "100px" }}
      />

      <h4>Employee Name</h4>
      <p>Job Title: Software Engineer</p>
    </div>
  );
}

export default EmployeeListItem;
