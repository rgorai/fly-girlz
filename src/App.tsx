import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { parseRoute } from './utils/strings'
import ErrorPage from './components/ErrorPage'

const APP_SPECS: string[] = [
  'Our Mission',
  'About Captian Zoya',
  'FAQs',
  'Contact Us',
]

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar specs={APP_SPECS} />

        <Routes>
          <Route path="/" element={<>homepage</>} />

          {APP_SPECS.map((e) => (
            <Route path={parseRoute(e)} element={<>{e} page</>} key={e} />
          ))}

          <Route
            path="*"
            element={<ErrorPage status="404" statusText="Not Found" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
