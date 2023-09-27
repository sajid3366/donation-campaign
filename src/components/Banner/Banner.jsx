
const Banner = () => {
    return (
        <div className=" text-center  my-12">
            <img style={{
                backgroundImage: `url('https://i.ibb.co/2YJ9Vch/Rectangle-4281.png')`,
                opacity:0.3,
                
                
            }} className="h-[80vh] w-full rounded-lg"   alt="" />
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