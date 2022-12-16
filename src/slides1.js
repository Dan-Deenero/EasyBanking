import phone from './images/image-mockups.png';

const Slides1 = () => {
    return ( 
        <section className="one bg-neutral-veryLightGray grid grid-cols items-center relative overflow-hidden justify-center">
            <div className='mx-6 text-center md:text-start md:pl-24 gap-6 grid items-center justify-center'>
                <h2 className='text-4xl tracking-wider'>Next generation digital banking</h2>
                <p className='text-sm'>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
                <div className="request mx-auto md:mx-0 bg-gradient-to-r h-10 w-36 text-center from-primary-limeGreen to-primary-brightCyan px-4 py-2 rounded-full font-bold text-sm text-white">Request Invite</div>
            </div >
            <div className="image order-first md:order-last z-0 flex justify-center items-center">
                {/* <img src={intro} alt="intro" className='hidden md:block'/> */}
                {/* <img src={intro2} alt="intro" className='md:hidden'/> */}
                <img src={phone} alt="intro" className='mage'/>
            </div>
        </section>
     );
}
 
export default Slides1;