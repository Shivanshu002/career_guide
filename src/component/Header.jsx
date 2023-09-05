function Header() {
    return (

        <div className="my-2 p-1 ">
            <div className="flex justify-between ">
                {/* For logo */}
                <div>
                    <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" />
                </div>

                {/* For navigation links */}

                <div className="flex  justify-between gap-2 ">
                    <ul className="justify-between gap-2 flex">
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Class 10</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Class 11-12</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">College</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Counsellors</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Professionals</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Study Abroad</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Psychometric Text</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Pricing</li>
                        <li className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Events</li>
                    </ul>

                    {/* for number */}
                    <div className="my-1">
                        <a className="p-1 text-blue-500" href="https://wa.me/<6307340868> ">6307340868</a>
                    </div>

                </div>

                {/* for Signup and Ragistration buttton */}
                <div className="flex gap-3">
                    <button className=" text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">Sign In</button>

                    <button className="text-slate-600 hover:bg-blue-500 rounded p-1 delay-100">My Profile</button>

                </div>
            </div>

        </div>

    )
}

export default Header;