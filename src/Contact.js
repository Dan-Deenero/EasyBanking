const Contact = () => {
    return ( 
            <section className="bg-neutral-veryLightGray relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63336.341961786304!2d3.359614003322326!3d7.181189096190869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGTBank%20near%20Asero%2C%20Abeokuta!5e0!3m2!1sen!2sng!4v1668629775795!5m2!1sen!2sng" width="300%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="relative bg-primary-darkBlue text-white flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-400 leading-relaxed">example@email.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:w-2/4 rounded-lg gap-4 py-3">
                        <h1 className="font-bold text-4xl">Contact us</h1>
                        <p>Our friendly team would love to hear from you</p>

                        <form action="" className="grid gap-4">
                            <div className="lg:flex w-full gap-7 justify-between">
                                <div className="grid mb-3 lg:mb-0">
                                    <label htmlFor="">First name</label>
                                    <input type="text" placeholder="First name" className="xl:w-60"/>
                                </div>
                                <div className="grid">                                
                                    <label htmlFor="">Last name</label>
                                    <input type="text" placeholder="Last name" className="xl:w-60"/>
                                </div>
                            </div>
                            <div className="grid">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="you@company.com"/>
                            </div>

                            <div className="grid">
                                <label htmlFor="">Phone number</label>
                                <input type="number" name="us" id="" />
                            </div>
                            <div className="grid">
                                <label htmlFor="">Message</label>
                                <textarea  cols="30" rows="10"></textarea>
                            </div>
                            <button className="px-5 py-2 bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan rounded-lg">Send message</button>
                        </form>
                    </div>
                </div>
            </section>
     );
}
 
export default Contact;