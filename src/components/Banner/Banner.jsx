
const Banner = () => {
    return (
        <div className=" text-center  my-12">
            <img style={{
                opacity:0.3,
            }} className="h-[80vh] w-full rounded-lg" src="https://i.ibb.co/47pCjR9/fc1f79e18cdc1a12320b9b10ec3e253d.jpg"  alt="" />
            <div className="absolute -mt-[300px] ml-[220px]">
                <h1 className="text-5xl font-bold text-center mb-4">I Grow By Helping People In Need</h1>

                <label className="input-group flex justify-center">
                    <input type="text" placeholder="Search here...." className="input  input-bordered" />
                    <span className="bg-[#FF444A] text-white cursor-pointer">Search</span>
                </label>
            </div>
        </div>
    );
};

export default Banner;