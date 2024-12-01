import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="main" className=" w-[100vw] h-[100vh] bg-[url('Assets/SGPI-10.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="container mx-auto w-[100vw] h-[100vh] ">
                    <div id="itemContainer" className=" h-[100vh] mx-auto text-center">
                        <div id="title" className=" pt-[170px] sm:pt-[150px] md:pt-[130px] lg:pt-[170px] xl:pt-[13px] 2xl:pt-[20px]">
                            <h1 className=" text-[23px] capitalize font-bold italic sm:text-[28px] md:text-[35px] lg:text-[40px] xl:text-[55px] ">sirajganj polytechnic institute,sirajganj (25064)</h1>
                            <h1 className=" text-[20px] capitalize font-bold italic sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[47px] ">result managment system</h1>
                        </div>
                        <div id="link_parent" className=" relative bg-green-700 mt-[10%] w-[260px] h-[150px] mx-auto rounded-xl sm:w-[300px] sm:h[200px] md:w-[350px] md:h-[220px] lg:w-[400px] lg:h-[250px] xl:w-[490px] xl:h-[260px] ">
                            <div className="absolute w-[60%] top-1/2 left-1/2 transform- translate-x-[-50%] translate-y-[-50%]">
                                <Link to={"/result"}><p className="font-myFontMontserrat capitalize text-[15px] font-bold rounded-xl p-2 bg-green-600 hover:bg-green-500 duration-500 md:p-3 md:text-[20px lg:text-[25px] xl:text-[28px] ">result</p></Link>
                                <Link to={"/admin"}><p className="font-myFontMontserrat capitalize text-[15px] font-bold rounded-xl p-2 mt-4 bg-green-600 hover:bg-green-500 duration-500 md:p-3 md:text-[20px lg:text-[25px] xl:text-[28px] ">admin</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Home;