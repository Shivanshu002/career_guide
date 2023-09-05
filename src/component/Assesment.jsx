function Assesment() {
    return (
        <div className="w-full my-7 flex flex-col md:flex-col">

            <div className="flex justify-center">
                <h1 className="font-bold text-[50px] text-[#2980b9]">Phychometric Assessment</h1>
            </div>

            <div className="flex md:flex-row flex-col justify-center gap-5 py-3">
                <button className="font-bold text-white border border-gray-400 p-2 bg-[#f23e36] rounded">Psychometric Career Test</button>
                <button className="font-bold p-2 rounded border border-gray-400">21st Century Skills & Learning Test</button>
            </div>
            <div className="my-2 flex md:flex-col flex-col items-center">
                <p className=" my-1 text-gray-600">CareerGuide brings to you scientific and meticulously designed Psychometric Assessments</p>
                <p className=" my-1 text-gray-600">to discover your true potential and interest ,learning styles and skills to excel in 21st Century</p>
            </div>

        </div>
    )
}

export default Assesment;