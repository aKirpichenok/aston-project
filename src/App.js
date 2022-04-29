import { Routes, Route } from "react-router-dom"

import { Layout } from "./components/Layout"
import { Home, History, Searching, Favourites, SignIn, SignUp, NotFound } from "./pages"



const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="searching" element={<Searching />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App