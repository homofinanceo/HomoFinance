const Information = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-12">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-center text-5xl sm:text5xl text-white py-1">
                        About
                    </h1>
                    <br />
                    <p className="text-center text-white text-xl text-down pb-12 font-light">
                        Homo Finance is a cryptocurrency <br /> designed to help charities <br /> while transforming DeFi <br /> with the Homo Autostaking <br /> Protocol (HAP) that delivers the <br /> industry’s highest fixed APY, <br /> rebasing rewards every 30 minutes, <br /> and a simple buy-hold-earn <br /> system that grows your portfolio in <br /> your wallet, fast.
                    </p>
                    <br />
                    <p className="text-center text-white text-xl text-down pb-4 font-light">
                        Earn a fixed 102k% APY with HOMO <br /> and donate to charities
                    </p>
                    <p className="text-center text-white text-xl text-down pb-12 font-light">
                        Welcome to HOMO
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Information;