import { useState } from "react"; // useState hook import and used
import { FaUser } from "react-icons/fa6"; // react icon import and used


const Result = () => {

    const [message, setMessage] = useState(''); // Error message state 
    const [color, setColor] = useState(false);//text error message color red and green sate
    const [formValue, setFormValue] = useState({ name: '', roll: '', department: '' });//form value state

    const students =[ // student object
        { name: 'Limon', roll: '524901', department: 'computer'},
        { name: 'Kawsar', roll: '525024', department: 'civil' },
        { name: 'Noornabi', roll: '525014', department: 'electrical' }
    ];

    //Handle input value
    const handleInputValueChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        //student object match kore kina seti check kore
        const validStudent = students.some(student => 
            student.name === formValue.name &&
             student.roll === formValue.roll && 
            student.department === formValue.department
        );

        // Validate form inputs check
        if (validStudent) {
            setMessage('Welcome! The information is correct and show result');
            setColor(true);
        }
        
        else {
            setMessage('Student information don`t match!');
            setColor(false);
        }
    };

    return (
        <>
            <section id="main">
                <div id="Container" className="container mx-auto h-[100vh]">
                    <div className=" w-[300px] sm:w-[350px] lg:w-[400px] absolute top-1/2 left-1/2 transform- translate-x-[-50%] translate-y-[-50%]">
                        <form onSubmit={handleSubmit} className=" p-4 bg-[#e7e7e7] w-[100%] rounded-2xl shadow-[0px_50px_79px_3px_rgba(0,0,0,0.4)]">
                            <div className=" mx-auto w-[90%]">
                                <div id="logo" className="mb-8">
                                    <FaUser className="text-[70px] text-[#3a3c45] mx-auto"></FaUser>
                                    <h1 className="font-myFontMontserrat text-center capitalize text-[32px] text-[#3a3c45] font-bold">student info</h1>  
                                </div>
                                <div id="name" className="h-[64px]">
                                    <div><input onChange={handleInputValueChange} required type="text" placeholder="Name" name="name" className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md" /></div>
                                </div>
                                <div id="roll" className="h-[64px] mt-2">
                                    <div><input onChange={handleInputValueChange} required type="number" placeholder="Roll" name="roll" className="outline-[#3a3c45] hover:bg-[#f5f5f5] duration-200 w-[100%] p-[10px] text-[16px] rounded-md"/></div>
                                </div>
                                <div id="departmentSelect" className="h-[64px] mt-2" >
                                    <select onChange={handleInputValueChange} required name="department" value={formValue.department} className=" w-[100%] p-[10px] text-[16px] text-[#3a3c45] rounded-md capitalize hover:bg-[#f5f5f5] duration-200" >
                                        <option>Select Department</option>
                                        <option value="computer" className="hover:bg-[#f5f5f5] duration-200">computer</option>
                                        <option value="civil" className="hover:bg-[#f5f5f5] duration-200">civil</option>
                                        <option value="electrical" className="hover:bg-[#f5f5f5] duration-200">electrical</option>
                                        <option value="electronics" className="hover:bg-[#f5f5f5] duration-200">electronics</option>
                                        <option value="rac" className="hover:bg-[#f5f5f5] duration-200">rac</option>
                                    </select>
                                    <p className={`text-[14px] ${color ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
                                </div>
                                <button type="submit" className=" mt-8 font-myFontMontserrat hover:bg-white duration-300 capitalize text-[22px] text-[#3a3c45] font-bold w-[100%] rounded-md border-white border-x-8 border-y-2 p-2 ">result</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Result;