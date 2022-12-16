import logo from './images/logolight.svg';
import facebook from './images/icon-facebook.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';


const Footer = () => {
    return ( 
        <div className="footer bg-primary-darkBlue h-auto grid justify-center text-center lg:text-start p-6 gap-4 text-neutral-White">
            <div className='grid lg:grid-cols-3 justify-center gap-6 lg:gap-20 my-7'>
                <div className='grid gap-6 lg:gap-2 justify-center'>
                    <img src={logo} alt="logo" className='ml-4'/>
                    <div className='grid grid-cols-5 lg: gap-4'>
                        <img src={facebook} alt="facebook" className='hover:text-primary-limeGreen'/>
                        <img src={youtube} alt="youtube" />
                        <img src={twitter} alt="twitter" />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
                <div className='grid gap-3 lg:gap-8 lg:grid-cols-2 lg:mr-40'>
                    <div className='links grid gap-3 lg:w-40'>
                        <a href="" className='hover:text-primary-limeGreen'>About us</a>
                        <a href="" className='hover:text-primary-limeGreen'>Contact</a>
                        <a href="" className='hover:text-primary-limeGreen'>Blog</a>
                    </div>
                    <div className='links grid gap-3 lg:w-40'>
                        <a href="" className='hover:text-primary-limeGreen'>Careers</a>
                        <a href="" className='hover:text-primary-limeGreen'>Support</a>
                        <a href="" className='hover:text-primary-limeGreen'>Privacy Policy</a>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className="request bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan px-4 py-2 w-40 h-10 text-center rounded-full font-bold text-sm">Request Invite</div>
                    <h4 className='text-neutral-grayishBlue'>&copy;Easybank. All Rights Reserved</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;