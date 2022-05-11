import Discord from '../../discord-icon-svgrepo-com.svg';
import Telegram from '../../icons8-telegram-app.svg';

const Footer = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-12">
                <div lassName="flex flex-1 justify-start flex-col md:mr-10 sm:">
                    <h1 className="text-center text-3xl text-white py-1 font-bold -indent-5">
                        Connect with us 
                    </h1>
                    <a href="https://t.me/homofinance">
                            <img src={Telegram} alt="Telegram" className="inline pr-4 w-15">
                            </img>
                    </a>
                    <a href="https://discord.gg/te6YMRW3mV">
                        <div className="inline relative">
                            <img src={Discord} alt="Discord" className="inline pr-4 w-16">
                            </img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;