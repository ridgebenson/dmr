import { Link } from 'react-router-dom';


const Welcome = () => {
    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full',timeStyle:'long' }).format(date);

    // const content = (
    //     <section className='welcome'>
    //         <p>{today}</p>

    //         <h1>Welcome!</h1>
    //         <p><Link to = "/dash/disasters">View Disasters</Link></p>
    //         <p><Link to = "/dash/users">View User Settings</Link></p>

    //     </section>
    // );

    const content = (
        <>
            {/* <h1 style={{textAlign:"center",color:"rgb(27, 40, 223)"}}>Report a Disaster</h1> */}
            <div className='dsReportingDiv'>
                <form className='disasterReporting-form'>
                    {/* Location Information */}
                    <div className="form-group">
                        <label htmlFor="location" className='form-label'>Location</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Enter location"
                            // Add onChange handler to capture location input
                        />
                    </div>
            
                    {/* Type of Disaster */}
                    <div className="form-group">
                        <label htmlFor="disasterType" className='form-label'>Type of Disaster</label>
                        <select id="disasterType">
                            <option value="fire">Fire</option>
                            <option value="medical">Medical Emergency</option>
                            <option value="floods">Floods</option>
                            <option value="landslide">Landslide</option>
                            {/* Add other disaster types */}
                        </select>
                    </div>
            
                    {/* Severity Level */}
                    <div className="form-group">
                        <label className='form-label'>Severity Level</label>
                        {/* Add radio buttons or a dropdown for severity level */}
                    </div>
            
                    {/* Date and Time */}
                    <div className="form-group">
                        <label className='form-label'>Date</label>
                        <input type="date" id="date" />
                    </div>
                    <div className="form-group">
                        <label className='form-label'>Time</label>
                        <input type="time" id="time" />
                    </div>
            
                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description" className='form-label'>Description</label>
                        <textarea
                            id="description"
                            placeholder="Describe the disaster..."
                            // Add onChange handler to capture description input
                        ></textarea>
                    </div>
            
                    {/* Contact Information */}
                    <div className="form-group">
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className='form-label'>Phone Number</label>
                        <input type="tel" id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id="email" placeholder="Your email address" />
                    </div>
            
                    {/* Additional Information */}
                    {/* Add any other relevant fields (e.g., witness accounts, affected population) */}
                    
                    {/* Confirmation and Submit */}
                    <div className="form-group">
                        <input type="checkbox" id="confirmation" />
                        <label htmlFor="confirmation" className='form-label'>I confirm the accuracy of this report</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        </>
    );
    

  return content;
};

export default Welcome;