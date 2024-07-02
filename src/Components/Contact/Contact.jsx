import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4e8f94e7-fef6-4c7a-9bc2-a2f77876d067");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });then((res) =>  res.json());
  
      const data = await response.json();
  
      if (res.success) {
        console.log("Success", res);
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(res.message);
      }
    };



  return (

    <div className='contact'>
        <div className="contact-col">
            <h3>Send us Message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to ask guys you ask what ever you want just mindfull be respectful with other people</p>
            <ul>
                <li>Contact@Ayanokoji</li>
                <li>09516774822</li>
                <li>Philippines Mangaldan, Pangasinan</li>
            </ul>
        </div>
        <div className="contact-col">
            <div className="contact-col">
                <form onSubmit={onsubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact