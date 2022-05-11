import { Navbar, Welcome, Information, Footer } from './components';
import Ukraine from '../UkraineFlagge.png'

const App = () => {

  return (
    <div className="min-h-screen">
        <img src={Ukraine} alt="Ukraine" className="w-full h-10"/>
      <div className="gradient-bg-welcome">
        <Information />
      </div>
    </div>
  )
}

export default App
