import { Navbar, Welcome, Information, Footer } from './components';
import Ukraine from '../UkraineFlagge.svg'

const Website = () => {

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden w-full h-10">
	      <img className="object-cover w-full h-full" src={Ukraine} alt="Ukraine"/>

	      <div className="absolute flex w-full h-full justify-center items-center top-0">
	        <h4 className="text-sm text-white sm:text-xl lg:text-2xl 2xl:text-3xl">We support Ukrain with our Treasury! Buy and help Ukrain! </h4>
    	  </div>
      </div>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Information />
        <Footer />
      </div>
    </div>
  )
}

export default Website
