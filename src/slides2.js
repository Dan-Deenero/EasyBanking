import Budget from './images/icon-budgeting.svg';
import Onboard from './images/icon-onboarding.svg';
import Api from './images/icon-api.svg';
import Online from './images/icon-online.svg';

const Slides2 = () => {
    return ( 
        <section className="two bg-neutral-lightGrayishBlue h-auto grid justify-center">
            <div className='grid max-w-7xl py-32 gap-16 mx-3  text-center md:text-start'>
                <div className='max-w-md gap-5 grid'>
                    <h2 className='text-4xl'>Why choose Easybank?</h2>
                    <p>We leverage open Banking to your bank account into hub. Control your finances like never before.</p>
                </div>
                <div className='grid lg:grid-cols-4 gap-7'>
                    <div className='grid gap-6'> 
                        <div className='flex justify-center md:justify-start'>
                            <img src={Online} alt="Online"/>
                        </div>
                       <h4 className='text-3xl'>Online Banking</h4> 
                       <p>Our mordern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div> 
                    <div className='grid gap-6 w-full'>
                       <div className='flex justify-center md:justify-start'>
                            <img src={Budget} alt="bugdget" className=''/>
                       </div>
                       <h4 className='text-3xl'>Simple Budgeting</h4> 
                       <p>See exactly where your money goes each month. Receive notifications when you're close to your hitting limit.</p>
                    </div> 
                    <div className='grid gap-6'>
                        <div className='flex justify-center md:justify-start'>
                            <img src={Onboard} alt="onboard" className=''/>
                        </div>
                        <h4 className='text-3xl'>Fast Onboarding</h4> 
                        <p>We don't do branches. Open your account in minutes online and start taking control of your finance right away.</p>
                    </div> 
                    <div className='grid gap-6'>
                        <div className='flex justify-center md:justify-start'>
                            <img src={Api} alt="Api" />
                        </div>
                        <h4 className='text-3xl'>Open API</h4> 
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div> 
                </div>
            </div>
        </section>
     );
}
 
export default Slides2;