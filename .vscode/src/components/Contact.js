const Contact = () => {
    return (
        <div>
            <h1 className = "text-2xl font-bold text-center m-4 p-4">Contact Us Page :</h1>
            <h2 className = "text-2xl font-bold text-center m-4 p-4">Phone: 8959409444</h2>
            <form className = "flex flex-col items-center p-4 m-4">
                <label className = "text-xl font-bold text-center m-4 p-4">Name:</label>
                <input type = "text" placeholder = "Enter your name" className = "text-xl font-bold text-center m-4 p-4" /> 
                <label className = "text-xl font-bold text-center m-4 p-4">Message:</label>
                <input type = "text" placeholder = "Enter your message" className = "text-xl font-bold text-center m-4 p-4" />
                <label className = "text-xl font-bold text-center m-4 p-4">Email:</label>
                <input type = "email" placeholder = "Enter your email" className = "text-xl font-bold text-center m-4 p-4" />
                <button className = "bg-black text-white p-2 m-2 rounded-lg cursor-pointer">Submit</button>
               
            </form>
        </div>
    );
}
export default Contact;

module.exports = Contact;