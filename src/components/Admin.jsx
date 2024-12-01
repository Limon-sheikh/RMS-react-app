import { useState } from "react";
import { RiAdminFill } from "react-icons/ri"; //react icon import and used
import { Link, useNavigate } from "react-router-dom"; //dom import and used
import { VscEye } from "react-icons/vsc";//import eye show icon
import { VscEyeClosed } from "react-icons/vsc";//import eye hide icon

const Admin = () => {

    //password show and hide start
    const [showPass, setShowPassword] = useState(false); //password show and hide state
    const handleShowPassword = () => {
        setShowPassword(!showPass);
    }
    //end
        
    // form validetion handling
    const navigate = useNavigate();//page naviget hook. submit click and go to admin page
    const [message, setMessage] = useState('');
    const [formValues, setFormValues] = useState({ username: '', password: '' });
    // const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8, 16}$/;//password regex, condition- must 8-16 character, at least one uppercase(A-Z), lowercase(a-z), special sign(@,#,$,%,&) and number(0-9).
    
    // server username and passeord
    const validServerPassword = {
        username: 'admin',
        password: 'Admin11$',
    };
    
    // form input handler
    const [color, setColor] = useState(false);//text error message color red and green sate
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formValues;        
    
        if (username === validServerPassword.username && password === validServerPassword.password ) {
            setMessage('Login Successful');
            setColor(true)
            navigate('')
        } 
        
        else {
            setMessage('Invalid username or password');
            setColor(false)
        }
    };
    // end

    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className=" absolute top-1/2 left-1/2 transform- translate-x-[-50%] translate-y-[-50%] ">
                        <form onSubmit={handleSubmit} className="bg-[#e7e7e7]  p-4 rounded-2xl w-[300px] sm:w-[350px] lg:w-[400px] shadow-[0px_50px_79px_3px_rgba(0,0,0,0.4)]" >
                            <div className="">
                                <div className="text-[80px] "><RiAdminFill className=" mx-auto text-[#3a3c45]"/>
                                <h1 className="font-myFontMontserrat text-[#3a3c45] mb-9 capitalize font-bold text-[30px] text-center">admin</h1>
                                </div>
                                <div id="username" className="h-[64px]">
                                    <div>
                                        <input onChange={handleInputChange} name='username' required className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md" type="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div id="password" className="h-[70px] mt-2 ">
                                    <div className=" relative">
                                        <input onChange={handleInputChange} name='password' required className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md" type={showPass? 'text':'password'} placeholder="Password" />
                                        {
                                            showPass?
                                            <VscEye onClick={handleShowPassword} className="text-[22px] text-[#3a3c45] absolute  left-[90%] top-[10px] cursor-pointer" />
                                            :
                                            <VscEyeClosed onClick={handleShowPassword} className="text-[22px] text-[#3a3c45] absolute  left-[90%] top-[10px] cursor-pointer" />
                                        }
                                    </div>
                                    <p className={`text-[14px] ${color ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
                                </div>
                                <button type="submit" className="font-myFontMontserrat text-[#3a3c45] hover:bg-white duration-300 capitalize text-[22px] font-bold w-[100%] rounded-md border-white border-x-8 border-y-2 p-2 mt-10 my-4">login</button>
                                <div className="font-myFontMontserrat text-center text-[14px] text-[#3a3c45] hover:text-blue-900 hover:underline capitalize ">
                                    <Link to={"/ForgatPassword"}><p>forgotten password?</p></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Admin;