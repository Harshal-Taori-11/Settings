import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Frm(){

    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
          setPdfFile(file);
        } else {
          setPdfFile(null);
          alert('Please select a PDF file.');
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Form submitted to hospital successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            style:{
                background:'#06b6d4',
            },
            });
    };

    return(
        <div className="max-w-md mx-auto my-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="mb-4 text-xl text-cyan-600">Registration form for Nearby Hospitals</h1>
                <div className="mb-4">
                    <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="Name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="Address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                        <input
                            type="text"
                            id="Address"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="PhoneNumber" className="block text-gray-700 text-sm font-bold mb-2">PhoneNumber:</label>
                        <input
                            type="tel"
                            id="PhoneNumber"
                            value={PhoneNumber}
                            pattern="[7-9]{1}[0-9]{9}"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="pdfFile" className="block text-gray-700 text-sm font-bold mb-2">Upload Health Report:</label>
                        <input
                            type="file"
                            id="pdfFile"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                </div>
                <div className="mb-4">
                    <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold mb-2">Select an option:</label>
                    <select
                        id="dropdown"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Select Hospital...</option>
                        <option value="option1">Lifepoint Hospital</option>
                        <option value="option2">Aditya Birla Hospital</option>
                        <option value="option3">Ozone Hospital</option>
                    </select>
                </div>
        
                <div className="flex items-center justify-between">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}