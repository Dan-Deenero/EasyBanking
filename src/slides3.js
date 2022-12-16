import currency from './images/image-currency.jpg'
import restaurant from './images/image-restaurant.jpg'
import plane from './images/image-plane.jpg'
import confetti from './images/image-confetti.jpg'
const Slides3 = () => {
    return ( 
        <section className="three bg-neutral-veryLightGray h-auto grid justify-center">
            <div className=" h-auto grid max-w-7xl py-32 gap-16 mx-5">
                <h3 className="text-4xl text-center md:text-start">Latest Articles</h3>
                <div className="grid lg:grid-cols-4 gap-6">
                    <div className='bg-neutral-White grid rounded-xl overflow-hidden'>
                        <img src={currency} alt="currency" className='w-full h-52 object-cover'/>      
                        <div className='h-1/2 p-3 grid gap-4'>
                            <p>By Claire Robinson</p>
                            <h4 className='text-xl'>Recieve money in any currency with no fees</h4>
                            <p>The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single...</p>
                        </div>
                    </div>
                    <div className='bg-neutral-White grid rounded-xl overflow-hidden'>
                        <img src={restaurant} alt="restaurant" className='w-full h-52 object-cover'/>
                        <div className='h-1/2 p-3 grid gap-4'>
                            <p>By Wilson Hutton</p>
                            <h4 className='text-xl'>Treat yourself without worrying about money</h4>
                            <p>Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...</p>
                        </div>
                    </div>
                    <div className='bg-neutral-White grid rounded-xl overflow-hidden'>
                        <img src={plane} alt="plane" className='w-full h-52 object-cover'/>
                        <div className='h-1/2 p-3 grid gap-4'>
                            <p>By Wilson Hutton</p>
                            <h4 className='text-xl'>Take your Easybank card wherever you go</h4>
                            <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. we'll even show you...</p>
                        </div>
                    </div>
                    <div className='bg-neutral-White grid rounded-xl overflow-hidden'>
                        <img src={confetti} alt="confetti" className='w-full h-52 object-cover'/>
                        <div className='h-1/2 p-3 grid gap-4'>
                            <p>By Claire Robinson</p>
                            <h4 className='text-xl'>Our invite-only Beta accounts are now live!</h4>
                            <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Slides3;