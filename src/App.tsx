import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { parseRoute } from './utils/strings'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import MissionPage from './components/Pages/MissionPage'

const APP_SPECS: AppSpec[] = [
  {
    name: 'Our Mission',
    element: <MissionPage />,
    navBar: true,
  },
  {
    name: 'About Captain Zoya',
    element: <>about captain zoya page</>,
    navBar: true,
  },
  {
    name: 'FAQs',
    element: <>faqs page</>,
    navBar: true,
  },
  {
    name: 'SUPPORT US',
    element: <>support us page</>,
    toolbar: true,
  },
  {
    name: 'CONTACT US',
    element: <>contact us page</>,
    toolbar: true,
  },
]

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar specs={APP_SPECS} />

        <div className="backdrop">
          <div>
            <Routes>
              <Route path="/" element={<MissionPage />} />

              {APP_SPECS.map((e) => (
                <Route
                  path={parseRoute(e.name)}
                  element={e.element}
                  key={e.name}
                />
              ))}

              <Route
                path="*"
                element={<ErrorPage status="404" statusText="Not Found" />}
              />
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
