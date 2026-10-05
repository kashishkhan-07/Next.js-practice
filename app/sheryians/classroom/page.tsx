import FilterUsers from "@/components/FilterUsers";

export default async function Classroom(){

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await response.json();

  return(
     <main>
      <h1>Hello from Classroom!</h1>
      <p>This is the classroom page of the application.</p>
      <br />
       <FilterUsers users={users}/>
       
     </main>
  )
}