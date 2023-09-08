import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BsMenuButtonFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import Class10 from '../component/navigation_pages/Class10';
import Class11_12 from '../component/navigation_pages/Class11_12';
import College from '../component/navigation_pages/College';
import Counseller from '../component/navigation_pages/Counseller';
import Events from '../component/navigation_pages/Events';
import Myprofile from '../component/navigation_pages/Myprofile';
import Pricing from '../component/navigation_pages/Pricing';
import Proffessionals from '../component/navigation_pages/Professionals';
import Psychometric from '../component/navigation_pages/Psychometric';
import Sign from '../component/navigation_pages/Sign';
import Study_abroad from '../component/navigation_pages/Study_abroad';

function Header() {
    let URL = "https://i.ibb.co/w0BJt1L/cg-logo.png";
    const [toggle, setToggle] = useState(false);
    return (
        <Router>
            <div className="my-2 p-1 ">
                <div className="flex justify-between ">
                    {/* For logo */}
                    <div>
                        <img src={URL} />
                    </div>
                    {/* For navigation links */}
                    <div className="flex  justify-between gap-2 ">
                        <ul className="justify-between gap-2 hidden md:flex">
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='class10'> Class 10</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='class11_12'> Class 11-12</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='college'> College</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='counsellors'> Counsellors</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='professionals'> Professionals</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='studyabroad'> Study Abroad</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='psychometric'> Psychometric Test</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='pricing'> Pricing</Link></li>
                            <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100"><Link to='events'> Events</Link></li>
                        </ul>
                        {
                            toggle ?
                                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block' />
                                :
                                <BsMenuButtonFill onClick={() => setToggle(!toggle)} className=' text-2xl md:hidden block' />
                        }
                        {/* For Menu */}
                        <ul className={`duration-300 md:hidden p-2 gap-7 text-white fixed bg-black top-[97px]${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                            <li className='p-5'>Class10</li>
                            <li className='p-5'>Class11_12</li>
                            <li className='p-5'>College</li>
                            <li className='p-5'>Counseller</li>
                            <li className='p-5'>Professionals</li>
                            <li className='p-5'>Study_abroad</li>
                            <li className='p-5'>Psychometric Test</li>
                            <li className='p-5'>Pricing</li>
                            <li className='p-5'>Events</li>
                        </ul>
                        <Routes>
                            <Route exact path='/class10' element={<Class10 />}></Route>
                            <Route exact path='/class11_12' element={<Class11_12 />}></Route>
                            <Route exact path='/college' element={<College />}></Route>
                            <Route exact path='/counsellors' element={<Counseller />}></Route>
                            <Route exact path='/professionals' element={<Proffessionals />}></Route>
                            <Route exact path='/studyabroad' element={<Study_abroad />}></Route>
                            <Route exact path='/psychometric' element={<Psychometric />}></Route>
                            <Route exact path='/pricing' element={<Pricing />}></Route>
                            <Route exact path='/events' element={<Events />}></Route>
                            <Route exact path='/sign' element={<Sign />}></Route>
                            <Route exact path='/myprofile' element={<Myprofile />}></Route>
                        </Routes>
                        {/* for number */}
                        <div className="my-1 hidden md:flex">
                            <a className="p-1 text-blue-500" href="https://wa.me/<6307340868> ">6307340868</a>
                        </div>
                    </div>
                    {/* for Signup and Ragistration buttton */}
                    <div className="gap-3 hidden md:flex">
                        <button className=" text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">
                            <Link to='/sign'> Sign In</Link></button>
                        <button className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">
                            <Link to='/myprofile'> My Profile</Link></button>
                    </div >
                </div>
            </div>
        </Router>


    )
}

export default Header;