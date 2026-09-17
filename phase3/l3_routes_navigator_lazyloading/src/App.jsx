import {Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import { Users } from './Users'
import {User} from './User'
import { Layout } from './Layout'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<User />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
