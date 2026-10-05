type ProfilePageProps = {
  params: Promise<{
    name: string;
  }>;
};


export default async function ProfilePage({params}: ProfilePageProps) {
 const users =[
  {
    id:1,
    name:'kashish',
    email:'kk@gmail.com',
    bio:"Software Engineer"
  },
   {
    id:2,
    name:'jiya',
    email:'j@gmail.com',
    bio:"Developer"
  },
   {
    id:3,
    name:'Amit',
    email:'a@gmail.com',
    bio:"UI designer"
  },
   {
    id:4,
    name:'Shrey',
    email:'s@gmail.com',
    bio:"Manager"
  }
 ]

 const pageParams = await params

 const username = pageParams.name

 const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

 if(!user){
  return(
    <div>
      <h1>User not found</h1>
      <p>The user with the name "{username}" does not exist.</p>
    </div>
  )
 }

  return(
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <p>Email: {user?.email}</p>
      <p>Bio: {user?.bio}</p>
    </div>
  )
}