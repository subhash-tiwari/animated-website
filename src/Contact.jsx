import React, { useState } from "react";
 
const Contact=()=>{
    const [data,setData]=useState({
        fullname:"",
        mobile:"",
        email:"",
        message:""
    });

    const InputEvent =(event)=>{
        const{name,value}=event.target;

        setData((preVal)=>
        {
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
     e.preventDefault();
     alert(`my name is ${data.fullname},my phone no. is ${data.mobile},my email is ${data.email},my message is ${data.message}`);
    }
    return (
        <>
        <div className="my-5">
          <h1 className="text-center">contact us</h1>
        </div>
        <div className="container contact_div">
           <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                 <form onSubmit={formSubmit}>
                 <div class="mb-3">
                   <label for="exampleInputEmail1" class="form-label">Full Name</label>
                   <input type="text" class="form-control" id="exampleInputEmail1"
                   name="fullname"
                   Value={data.fullname}
                   onChange={InputEvent}
                   required
                   aria-describedby="emailHelp"/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Mobile No</label>
                   <input type="number" class="form-control"
                   name="mobile"
                   Value={data.mobile}
                   onChange={InputEvent}
                   required
                   id="exampleInputPassword1"/>
                 </div>
                 <div class="mb-3">
                   <label for="exampleInputPassword1" class="form-label">Email address</label>
                   <input type="email" class="form-control" id="exampleInputPassword1"
                   name="email"
                   Value={data.email}
                   onChange={InputEvent}
                   required
                   placeholder="enter email"/>
                   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Message</label>
                 <input type="message" class="form-control"
                 name="message"
                   Value={data.message}
                   onChange={InputEvent}
                 id="exampleInputPassword1"/>
               </div>
                 <button type="submit" class="btn btn-primary">Submit</button>
               </form>
              </div>
           </div>
        </div>
        </>
    )
}
export default Contact;