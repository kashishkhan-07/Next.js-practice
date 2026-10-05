type ProfilePageAgeProps = {
  params: Promise<{name: string,age: string}>;
};

export default async function profilePage({params}:ProfilePageProps){
  const pageParams = await params

  const username = pageParams.name
  const userage = pageParams.age

   const users =[
  {
    id:1,
    name:'kashish',
    email:'kk@gmail.com',
    age: 23,
    bio:"Software Engineer"
  },
   {
    id:2,
    name:'jiya',
    email:'j@gmail.com',
    age: 22,
    bio:"Developer"
  },
   {
    id:3,
    name:'Amit',
    email:'a@gmail.com',
    age: 25,
    bio:"UI designer"
  },
   {
    id:4,
    name:'Shrey',
    email:'s@gmail.com',
    age: 28,
    bio:"Manager"
  }
 ]

 const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase()
 && user.age.toString() === userage)

 return(
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>
      <p>Bio: {user?.bio}</p>
    </div>
  )

}