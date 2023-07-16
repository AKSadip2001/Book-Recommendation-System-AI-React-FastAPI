import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(name+", "+email+", "+message);
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex">
                    <div className='flex-fill me-2'>
                        <label htmlFor="input1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="input1" placeholder="John" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='flex-fill'>
                        <label htmlFor="input2" className="form-label">Email</label>
                        <input type="email" className="form-control" id="input2" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <input className='btn btn-primary'  type="submit" />
            </form>
        </>
    )
}

export default Form
