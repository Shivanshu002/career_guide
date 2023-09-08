import Adnansir from '../image/Adnansir.jpeg'
import surabhimam from '../image/surabhimam.jpeg'
import Pranavsir from '../image/Prav.jpeg';
import DeeptiSharma from '../image/DeeptiSharma.jpeg';
import Monika from '../image/Monika.jpeg';
import Vijay from '../image/Vijay.jpeg';
import Pooja from '../image/Pooja.jpg';
import { BsCameraVideo } from 'react-icons/bs';


function TalkWith() {
    return (


        <div className="container mx-auto  shadow-xl shadow-gray-400 rounded  p-3 justify-between my-6 flex md:flex-row flex-col md:w-full w-full gap-4 ">
            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={surabhimam} />
                </div>
                <div className="flex flex-col">
                    <div className='gap-2'>
                        <h2>Surabhi Dewra</h2>
                        <p>Exp:12years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>

                </div>
            </div>

            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={Adnansir} />
                </div>
                <div className="flex flex-col">
                    <div>
                        <h2>Adnan Buland</h2>
                        <p>Exp:15years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>



            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={Pranavsir} />
                </div>
                <div className="flex flex-col">
                    <div>
                        <h2>Pranav Bhatia</h2>
                        <p>Exp:14years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>

            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={Pooja} />
                </div>
                <div className="flex flex-col">
                    <div className='mr-6'>
                        <h2>Pooja Jain</h2>
                        <p>Exp:1years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>



            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={DeeptiSharma} />
                </div>
                <div className="flex flex-col">
                    <div>
                        <h2>Deepti Sharma</h2>
                        <p>Exp:10years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>



            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={Monika} />
                </div>
                <div className="flex flex-col">
                    <div className='mr-6'>
                        <h2>Monika  </h2>
                        <p>Exp:10years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>


            <div className="md:w-fit w-full flex md:flex-col flex-row md:gap-2 gap-6 items-center md:justify-center justify-evenly">
                <div>
                    <img className="w-20 rounded-[50%] border-2 border-blue-900" src={Vijay} />
                </div>
                <div className="flex flex-col">
                    <div className='mr-6'>
                        <h2>Dr. Vijay</h2>
                        <p>Exp:13years</p>
                    </div>
                    <div className='flex items-center gap-2 border border-red-600 w-fit  bg-[#f23e36] rounded text-white'>
                        <p >Talk</p>
                        <BsCameraVideo />
                    </div>
                </div>
            </div>


            <div className="w-fit flex  md:items-center">
                <p className='font-bold text-blue-600'>Show More</p>
            </div>


        </div>
    )
}

export default TalkWith;