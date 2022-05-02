import { Routes, Route } from "react-router-dom"
import { ErrorBoundary } from "./components/ErrorBoundary"

import { Layout } from "./components/Layout"
import { Home, History, Searching, Favourites, SignIn, SignUp, NotFound } from "./pages"
import { RequireAuth } from "./store/requireAuth"



const App = () => {
  return ( 
    <ErrorBoundary>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={
        <RequireAuth>
            <History />
        </RequireAuth>
            } />
        <Route path="searching" element={<Searching />} />
        <Route path="favourites" element={
        <RequireAuth>
            <Favourites />
        </RequireAuth>
            } />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </ErrorBoundary>
  )
}

export default App