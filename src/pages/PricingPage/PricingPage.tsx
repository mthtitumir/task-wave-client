import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { BsCheckLg } from 
import { BsCheckLg, BsBox, BsSendPlus } from 'react-icons/bs'
import { FaRegCommentDots } from 'react-icons/fa'

const PricingPage = () => {
    return (
        <div className='bg-black text-white container mx-auto'>
            <h1 className="text-6xl text-center pt-32 my-3 bg-gradient-to-r text-transparent bg-clip-text from-[#f46b30] to-[#3977f3] font-bold font-primary">Supercharge with Start free</h1>

            {/* tabs */}
            <Tabs className='text-center w-[90%] mx-auto mt-10'>
                <TabList className='  font-medium flex justify-center gap-12 text-center'>
                    <div className="tabs">
                        <Tab className="tab tab-lg tab-lifted text-white">Personal</Tab>
                        <Tab className="tab tab-lg tab-lifted text-white">Teams</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mb-7">
                        <div className="card  border-zinc-800 border-2 mt-10">
                            <div className="card-body text-start">
                                <h2 className='text-2xl  font-semibold'>Pro</h2>
                                <p className='text-gray-400 '>Ideal for small teams</p>

                                <div className='flex gap-3 items-center mt-10'>
                                    <h2 className='text-lg'>$<span className='text-5xl'>19</span></h2>
                                    <p>per month for <br />up to 10 users</p>
                                </div>

                                <p className='mt-3'>billed annually or <br />$39 billed monthly</p>

                                <button className='text-gradient'>Get Started</button>

                                <p className=' my-5'>Everything in <span className='font-bold'>Free</span>, plus:</p>

                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm '>Taskade AI</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>5 Work Places</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>10 Users Included</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>20 GB Storage </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>6-months project history </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Calendar integration & syncing </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Advanced team permissions </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>
                                        Guest sharing and links </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Password Protection </p>
                                </div>

                            </div>
                        </div>
                        <div className="card border-2 border-zinc-800 mt-10">
                            <div className="card-body text-start">
                                <h2 className='text-2xl  font-semibold'>Business</h2>
                                <p className='text-gray-400 '>Optimal for growing teams</p>

                                <div className='flex gap-3 items-center mt-10'>
                                    <h2 className='text-lg'>$<span className='text-5xl'>49</span></h2>
                                    <p>per month for <br />up to 25 users</p>
                                </div>

                                <p className='mt-3'>billed annually or <br />$99 billed monthly</p>

                                <button className='text-gradient'>Get Started</button>

                                <p className=' my-5'>Everything in <span className='font-bold'>Free</span>, plus:</p>

                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm '>Taskade AI</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>10 Work Places</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>25 Users Included</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>100 GB Storage </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>1-year project history </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>External team collaboration</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Cloud upload integration with Google Drive, Dropbox, and more
                                    </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>5000+ automations and integrations</p>
                                </div>
                            </div>
                        </div>
                        <div className="card border-2 border-zinc-800 mt-10">
                            <div className="card-body text-start">
                                <h2 className='text-2xl  font-semibold'>Ultimate</h2>
                                <p className='text-gray-400 '>Scale collaboration beyond your teams</p>

                                <div className='flex gap-3 items-center mt-5'>
                                    <h2 className='text-lg'>$<span className='text-5xl'>99</span></h2>
                                    <p>per month for <br />up to 50 users</p>
                                </div>

                                <p className='mt-3'>billed annually or <br />$199 billed monthly</p>

                                <button className='text-gradient'>Get Started</button>

                                <p className=' my-5'>Everything in <span className='font-bold'>Free</span>, plus:</p>

                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm '>Taskade AI</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Unlimited Work Places</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>50 Users Included</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>1,000 GB Storage </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>5-years project history </p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Advanced features and security.</p>
                                </div>
                                <div className='text-rose-600 flex gap-3 items-center'>
                                    <BsCheckLg></BsCheckLg>
                                    <p className='text-white text-sm'>Secure and simplify access with single sign on (SSO) through Okta and more </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card w-full bg-base-100 shadow-lg my-10  h-3/4">
                            <figure className="px-10 pt-10">
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Toy microscope</h2>
                                <p>A compact and fascinating educational tool that brings the wonders of science into childrens hands.</p>
                                <p className="font-medium">Price: 1200</p>
                                <p className="font-medium">Quantity: 8</p>
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10  h-3/4">
                            <figure className="px-10 pt-10">
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Electric Wiggler Kinetic</h2>
                                <p>A mesmerizing kinetic toy that wiggles and dances to the sound of music.</p>
                                <p className="font-medium">Price: 2000</p>
                                <p className="font-medium">Quantity: 5 </p>
                                {/* <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.9</span> </p> */}
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-lg my-10  h-3/4">
                            <figure className="px-10 pt-10">
                                {/* <img src={science1} alt="Shoes" className="rounded-xl w-full h-full" /> */}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-purple-700">Robo Wunderkind</h2>
                                <p>A modular toy that teaches kids coding and robotics through creative play and building.</p>
                                <p className="font-medium">Price: 600</p>
                                <p className="font-medium">Quantity: 20</p>
                                {/* <p><FaStar className='text-purple-700 inline -mt-1'></FaStar>  <span >4.1</span> </p> */}
                                <div className="card-actions">
                                    <button className="btn bg-purple-700 border-2 border-purple-700  text-white font-normal hover:bg-transparent hover:text-black hover:border-purple-700 hover:border-2   rounded">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>

            {/* Enterprise */}
            <div className='md:flex sm:px-7 justify-around rounded-xl items-center gap-5 border-2 border-zinc-800 w-[90%] mx-auto py-5 mt-12 md:mt-24'>
                <div>
                    <h2 className='text-2xl  font-semibold'>Enterprise</h2>
                    <p className='text-gray-400 my-3'>For organizations seeking a secure, scalable, and fully customizable <br /> solution designed to align with your unique requirements.</p>
                    <button className='text-gradient border-none flex items-center gap-3 text-base capitalize'><FaRegCommentDots className='text-xl'></FaRegCommentDots> Contact Sales</button>
                </div>

                <div className='sm:mt-10'>
                    <p className=' my-5'>Everything in <span className='font-bold'>Free</span>, plus:</p>

                    <div className='text-rose-600 flex gap-3 items-center my-3'>
                        <BsCheckLg></BsCheckLg>
                        <p className='text-white text-sm '>Unlimited members and storage</p>
                    </div>
                    <div className='text-rose-600 flex gap-3 items-center mb-3'>
                        <BsCheckLg></BsCheckLg>
                        <p className='text-white text-sm '>Enterprise Custom organization-wide deployment</p>
                    </div>
                    <div className='text-rose-600 flex gap-3 items-center mb-3'>
                        <BsCheckLg></BsCheckLg>
                        <p className='text-white text-sm '>Enterprise Automated license management with SCIM</p>
                    </div>
                    <div className='text-rose-600 flex gap-3 items-center mb-3'>
                        <BsCheckLg></BsCheckLg>
                        <p className='text-white text-sm '>Enterprise Access premium 24/7 support and guaranteed SLAs</p>
                    </div>
                    <div className='text-rose-600 flex gap-3 items-center mb-3'>
                        <BsCheckLg></BsCheckLg>
                        <p className='text-white text-sm '>Enterprise Enhanced visibility with SIEM integrations, audit logs, and more</p>
                    </div>

                </div>
            </div>

            {/* Featurex  */}
            <div className=''>
                <h1 className='text-4xl font-bold text-center mt-24 '>Compare plans and features.</h1>
                <div className="overflow-x-auto mt-16 w-[90%] mx-auto ml-20">
                    <table className="table text-lg font-normal">
                        {/* head */}
                        <thead className='text-white'>
                            <tr className='border-none'>
                                <th className='text-2xl'>Features</th>
                                <th>
                                    <h1 className='block text-2xl'>Pro</h1>
                                    <button className='text-gradient w-2/4 '>Get Started</button>
                                </th>
                                <th>
                                    <h1 className='block text-2xl'>Business</h1>
                                    <button className='text-gradient w-[160px] '>Get Started</button>
                                </th>
                                <th>
                                    <h1 className='block text-2xl'>Unlimited</h1>
                                    <button className='text-gradient  w-2/4 '>Get Started</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='border-zinc-800'>
                                <th className='text-2xl'>Usage</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 2 */}
                            <tr className='border-zinc-800' >
                                <th className='th'>Work Places</th>
                                <td>5</td>
                                <td>20</td>
                                <td>Unlimited</td>
                            </tr>
                            {/* row 3 */}
                            <tr className='border-zinc-800'>
                                <th className='th'>Members Included</th>
                                <td>10</td>
                                <td>25</td>
                                <td>50</td>
                            </tr>
                            <tr className='border-zinc-800'>
                                <th className='th'>Tasks</th>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr className='border-zinc-800'>
                                <th className='th'>Projects</th>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr className='border-zinc-800'>
                                <th className='th'>File Size</th>
                                <td>250 MB</td>
                                <td>500 MB</td>
                                <td>1 GB </td>
                            </tr>
                            <tr className='border-zinc-800'>
                                <th className='th'>File Storage</th>
                                <td>20 GB</td>
                                <td>100 GB</td>
                                <td>1, 000 GB </td>
                            </tr>
                            <tr className='border-zinc-800'>
                                <th className='th'>AI Credits Per Month</th>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAQ */}
            <h1 className='text-5xl font-bold text-center mt-24 '>Frequently asked questions.</h1>
            <p className='text-gray-500 text-center mt-4 text-lg'>You can change your plan or cancel at any time, hassle-free.</p>

            <div className='flex items-center gap-20 w-[85%] mx-auto mt-10'>
                <div className=''>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What kind of teams get the most out of Taskade?
                        </div>
                        <div className="collapse-content">
                            <p>    Taskade is designed with distributed teams in mind. That's why teams that frequently collaborate with cross-functional teams and clients - such as marketing teams, agencies, consultancies, business development, professional services, product teams, software development teams, and creative teams - tend to get the most out of it.
                                Organize and manage multiple teams and workspaces in one single account and subscription. Simply share a project or workspace, and invite your clients and team members to join instantly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Does Taskade AI use GPT-4?</div>
                        <div className="collapse-content">
                            <p>Yes! Taskade AI harnesses the power of OpenAI's GPT-4 to provide you with an intelligent AI assistant. Alongside GPT-4, Taskade AI incorporates a blend of ChatGPT and GPT-3.5 Turbo throughout the platform.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How am I billed when I add new workspace members?
                        </div>
                        <div className="collapse-content">
                            <p>         Pay only the flat monthly rate as described in your plan, regardless of usage and team size. Sharing projects and folders with editors and collaborators are always free.

                                Upgrade to any premium plan for a set number of team members at a flat monthly rate. We will only count unique workspace members towards your team limit. If you have any additional questions, please don't hesitate to contact us.

                                Do I need to commit to a long-term contract?
                                Nope! No enterprise lock-ins of any sort. You can pay monthly, or choose to commit to an annual plan at a discount.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What payment methods do you accept?</div>
                        <div className="collapse-content">
                            <p> We accept all major credit cards, Apple Pay, Google Pay, and more through the trusted payment provider Stripe to process payment. Stripe is the same payment provider trusted by companies like Google, Amazon, and Lyft.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer discounts?
                        </div>
                        <div className="collapse-content">
                            <p>   If you are a student, startup, nonprofit or an educational institution, you may qualify for a discount. Simply contact us to apply.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What is Taskade AI and AI credits</div>
                        <div className="collapse-content">
                            <p>To ensure fair and efficient use of our AI offerings, we've introduced AI credits. Each workspace is allocated a set number of credits per month, representing its AI usage capacity. This empowers your team to maximize the benefits of AI, while promoting optimal utilization of resources.

                                Harness the power of artificial intelligence with Taskade's innovative suite of productivity tools. Welcome to a smarter way of working, where technology meets efficiency to transform your workflow. Our unique offerings, the AI Workflow Generator and AI Assistant, are designed to take your productivity to the next level.

                                Taskade isn't just about AI—it's about making AI work for you. With our "/ai" command, a plethora of AI-assisted commands are at your disposal. Add due dates, change formats, create new blocks, and much more, all with a simple command. Task management has never been this efficient.

                                Discover the future of productivity with Taskade AI. Transform the way you organize and write tasks, notes, and projects. Embrace efficiency. Embrace the future. Embrace Taskade AI.

                                To ensure optimal performance and fair usage across all Taskade AI users, your access to AI features may be reduced depending on your usage.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How does Taskade AI use my data?</div>

                        <div className="collapse-content">
                            <p>Your data remains secure and confidential, adhering to our stringent data protection protocols in Taskade AI. The Taskade AI productivity suite pledges not to utilize your information for model training purposes.

                                Any data employed to enhance Taskade AI's capabilities will be shared exclusively with our partners to facilitate the delivery of Taskade AI features. We strictly prohibit partners or third parties from using your information for training their models or for any other objective.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team */}
            <h1 className='text-center mt-28 uppercase'>Trusted and loved by teams at:</h1>
            <div className='sm:flex-wrap md:flex w-[97%] sm:mx-auto mt-16 pl-40 border-b border-gray-700 pb-20 relative'>
                {/* <img className="text-pink-600 text-4xl animate-pulse absolute -top-52 -right-10 w-1/4" src="https://i.ibb.co/Wk40k75/box-removebg-preview.png" alt="" /> */}

                <img src="https://i.ibb.co/B2JvNVX/60c9e142ef997f142b0220df-New-Wise-formerly-Transfer-Wise-logo.png" alt="" className=' px-10  py-6 border grayscale w-[160px]' />
                <img src="https://i.ibb.co/z2DTCxw/booking-logo-white.png" alt="" className=' px-10  py-6 border grayscale w-[180px]' />
                <img src="https://i.ibb.co/MV3sKbz/netflix-logo-white-png-removebg-preview.png" alt="" className=' px-10  py-6 border grayscale w-[160px]' />
                <img src="https://i.ibb.co/sw4rfWx/04-2x-removebg-preview.png" alt="" className=' px-10  py-6 border grayscale w-[200px]' />
                <img src="https://i.ibb.co/Lnckfns/Compass-White-removebg-preview.png" alt="" className=' px-10  py-6 border grayscale w-[180px]' />
            </div>

            {/* get in touch */}
            <div className='relative'>
                {/* <img src="https://i.ibb.co/1R28Hx8/images-removebg-preview.png" alt="" className='className="text-pink-600 text-4xl   absolute top-8 left-28 ' /> */}
                {/* <GiStarShuriken className="text-pink-600 text-4xl animate-pulse absolute top-8 left-96" /> */}
                <BsBox className="text-gray-800 rotate-90 text-9xl font-thin  absolute top-16 right-9 w-[400px]" />
                <BsSendPlus className="text-gray-600 text-8xl   absolute left-28" />
                <h1 className='text-5xl font-bold text-center mt-20 pt-10 mb-28 '>Got a question?<span className=' bg-gradient-to-r text-transparent bg-clip-text from-[#f46b30] to-[#3977f3] '> Get in touch.</span></h1>
                <button className='text-gradient border-none flex items-center gap-3 text-base capitalize my-20'>Contact us</button>
            </div>

        </div>
    );
};

export default PricingPage;