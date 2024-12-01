import { useState } from "react";//import useState hook
import { useNavigate } from "react-router-dom";//page navigation 
import { VscEye } from "react-icons/vsc";//import eye show icon
import { VscEyeClosed } from "react-icons/vsc";//import eye hide icon
import { toast } from 'react-toastify';//import toast
import { TbPasswordUser } from "react-icons/tb";//import forgot password icon


const ForgatPassword = () => {

    //initial username and password hendling state start
    const [oldPassword, setOldPassword] = useState('');//old password state
    const [newPassword, setNewPassword] = useState('');//new password state
    const [confirmPassword, setConfirmPassword] = useState('');//confirm password state

    const [oldPasswordError, setOldPasswordError] = useState('');//old password error state
    const [newPasswordError, setNewPasswordError] = useState('');//new password error state
    const [confirmPasswordError, setConfirmPasswordError] = useState('');//confirm password error state one
    
    const changeOldPassword =(oldpass) =>{
        setOldPassword(oldpass.target.value);
        setOldPasswordError('');
    }
    const changeNewPassword = (newpass) =>{
        setNewPassword(newpass.target.value);
        setNewPasswordError('');
    }
    const changeConfirmPasswordOne = (confirmpass) =>{
        setConfirmPassword(confirmpass.target.value);
        setConfirmPasswordError('');
    }

    //wrapper function start
    const hendleConfirmPassword = (event) =>{ //this is wrapper function in confirm password
        changeConfirmPasswordOne(event);
     };
    //end

    //password show and hide hendling state start
    const [showPassOld, setShowPasswordOld] = useState(false); //old password show and hide state
    const [showPassNew, setShowPasswordNew] = useState(false); //new password show and hide state
    const [showPassConfirm, setShowPasswordConfirm] = useState(false); //confirm password show and hide state

    const handleShowPasswordOld = () =>{
        setShowPasswordOld(!showPassOld);
    }
    const handleShowPasswordNew = () =>{
        setShowPasswordNew(!showPassNew);
    }
    const handleShowPasswordConfirm = () =>{
        setShowPasswordConfirm(!showPassConfirm);
    }
    //end
    
    //form submit handling start
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,16}$/; //password regex pettarn
    const [message, setMessage] = useState("");
    const naviget = useNavigate();//page naviget hook. submit click and go to admin page

    const hendleFormSubmit = (e) =>{
        e.preventDefault();
        
        const serverPassword = "Admin11$";// Placeholder old password (server-side password)

        if (oldPassword !== serverPassword) {
            setMessage("Old password invalid");
            return;
        }

        if (newPassword.length < 8 || !(passwordPattern.test(newPassword))) {
            setMessage("New password must be 8-16 characters, at least one uppercase (A-Z), lowercase (a-z), special sign (@,#,$,%,&) and number (0-9).");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password dont match");
            return;
        }
        
        toast.success('forgot password successfull')
        naviget('/Admin')
        // else {
        // }
    };
    //end

    
    return (
        <>
            <section>
                <div className="container mx-auto h-[100vh]">
                    <div className=" h-[100vh] relative ">
                        <div className="  absolute top-[50%] left-[50%] transform- translate-x-[-50%] translate-y-[-50%]">
                            <form onSubmit={hendleFormSubmit} className="w-[300px] p-4 bg-[#e7e7e7] rounded-xl sm:w-[350px] lg:w-[400px] shadow-[0px_50px_79px_3px_rgba(0,0,0,0.4)]" >
                                <div id="hedingText" className=" text-center mb-10 ">
                                <div className="text-[80px] "><TbPasswordUser className=" mx-auto text-[#3a3c45]" /></div>
                                    <h1 className="font-myFontMontserrat text-[#3a3c45] capitalize font-bold text-[27px] ">change password</h1>
                                </div>
                                <div id="oldPassword" className="h-[64px] mt-2">
                                    <div className="relative">
                                        <input id="oldPass" onChange={changeOldPassword} required className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md " type={showPassOld? 'text':'password'} placeholder="Old Password" />
                                        { 
                                            showPassOld?
                                            <VscEye onClick={handleShowPasswordOld} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                            :
                                            <VscEyeClosed onClick={handleShowPasswordOld} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                        }
                                    </div>
                                    <p className="text-red-700 text-[14px]">{oldPasswordError}</p>
                                </div>
                                <div id="newPassword" className="h-[64px] mt-2">
                                    <div className="relative">
                                        <input id="newPass" onChange={changeNewPassword} required className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md " type={showPassNew? 'text':'password'} placeholder="New Password" />
                                        { 
                                            showPassNew?
                                            <VscEye onClick={handleShowPasswordNew} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                            :
                                            <VscEyeClosed onClick={handleShowPasswordNew} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                        }
                                    </div>
                                    <p className="text-red-700 text-[14px]">{newPasswordError}</p>
                                </div>
                                <div id="confirmPassword" className="h-[85px] mt-2">
                                    <div className="relative">
                                        <input id="confirmPass" onInput={hendleConfirmPassword} required onChange={hendleConfirmPassword} className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md " type={showPassConfirm? 'text':'password'} placeholder="Confirm Password" />
                                        { 
                                            showPassConfirm?
                                            <VscEye onClick={handleShowPasswordConfirm} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                            :
                                            <VscEyeClosed onClick={handleShowPasswordConfirm} className="text-[20px] text-[#3a3c45] absolute left-[90%] top-[11px] lg:left-[92%] cursor-pointer" />
                                        }
                                    </div>
                                    <p className="text-red-700 text-[14px]">{confirmPasswordError}{message}</p>
                                </div>
                                <button className=" mt-7 font-myFontMontserrat capitalize hover:bg-white duration-300 text-[#3a3c45] text-[22px] font-bold rounded-md border-white border-x-8 border-y-2 w-[100%] p-2 " type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>        
        </>
    );
};

export default ForgatPassword;