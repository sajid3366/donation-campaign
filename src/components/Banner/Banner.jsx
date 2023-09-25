
const Banner = () => {
    return (
        <div className="h-[70vh] text-center  bg-green-400 my-12">
            <h1 className="text-5xl font-bold ">I Grow By Helping People In Need</h1>
            <div className="flex justify-center items-center">
                <label className="input-group">
                    <input type="text" placeholder="Search here...." className="input  input-bordered" />
                    <span className="bg-[#FF444A] text-white cursor-pointer">Search</span>
                </label>
            </div>
        </div>
    );
};

export default Banner;