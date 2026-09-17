import Cards from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const users=[
  {name:"anobhav", title:"dev"},
  {name:"veeresh", title:"dev"},
  {name:"eesh", title:"dev"}
]
function App() {

  return (
    <>
      <Navbar/>
      {users.map((user,index)=>(
        <Cards key={index} name={user.name} title={user.title} />
      ))}
      <Footer/>
    </>
  )
}

export default App
