import { Bapa } from "../child-component/bapa"
export function Jepa(){
    const employees = [
    {
      id: 1,
      name: "John",
      role: "Java Developer",
      experience: 5,
    },
    {
      id: 2,
      name: "David",
      role: "React Developer",
      experience: 3,
    },
    {
      id: 3,
      name: "Rahul",
      role: "QA Engineer",
      experience: 4,
    },
    {
      id: 4,
      name: "Amit",
      role: "DevOps Engineer",
      experience: 6,
    },
  ];

  function sayHello(){
    console.log("hello everyone")
  }
    return(
        <div className="container-fluid p-4 d-flex">
            <h2>Parent</h2>
            {
              employees.map((emp)=>{
                return <Bapa key={emp.id} name={emp.name} role={emp.role} exp={emp.experience} onClick={sayHello}/>
              })
            }
        </div>
    )
}