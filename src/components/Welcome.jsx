import Flagge from '../../flagge.png';

const Welcome = () => {
    
    const buy = () => {
        
    }

    return (
      <div className="flex w-full justify-center items-center">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-12">
            <div className="flex flex-1 justify-start flex-col md:mr-10">
                  <h1 className="text-center text-5xl sm:text5xl text-white py-2">
                    The Crypto <br /> for the people
                  </h1>
                <p className="text-center mt-5 text-xl text-white font-semibold">
                    combine earning money with donating to charity
                </p>
              <div className="flex w-full justify-center items-center my-8 box-border h-full w-full">
                <a href="https://pancakeswap.finance"
                    type="button"
                    onClick={buy}
                   className="flex justify-center items-center mx-3 my-5 bg-[#ffe200] p-3 rounded-full cursor-pointer hover:bg-[#e4ca00] box-border h-full w-full"
                >
                  <p className="text-base font-semibold"> 
                    Buy
                  </p>
                </a>                
                <a
                  href="https://docs.homo-finance.ml/"
                  type="button"
                  onClick={buy}
                  className="flex justify-center items-center mx-3 my-5 bg-[#ffe200] p-3 rounded-full cursor-pointer hover:bg-[#e4ca00] box-border h-full w-full"
                >
                  <p className="text-base font-semibold">
                    Whitepaper
                  </p>                   
                </a>
              </div>                 
              <div className="flex w-full justify-center items-center">
                  <img src={Flagge} alt="Flagge" className="w-100"/>
              </div>
            </div>
          </div>
      </div>

    );
}

export default Welcome;