import React, { useState } from 'react';

import axios from 'axios';


   const InternForm=()=> {

   
    const [fname, fProcess] = useState("");
    const [lname, lProcess] = useState("");
    const [age, ageProcess] = useState("");
    const [city, cityProcess] = useState("");
    const [number, numberProcess] = useState("");
    
    const [mail, mailProcess] = useState("");
    const [message , msgprocess] = useState("");

   
   
    const save = () => {

        if(fname!=""&&lname!=""){
        var data = {
            firstname: fname,
            lastname: lname,
            age: age,
            city: city,
            number: number,
            email: mail
        };
        

        
        
        axios.post("http://localhost:5000/ninjas",data).then(res=>{
            fProcess("")
            lProcess("")
            ageProcess("")
            cityProcess("")
            numberProcess("")
            mailProcess("")
            msgprocess(`${data.firstname} ${data.lastname} added succesfuuly`)
        }
        
        )
    }else{
        msgprocess("fill the all inputs")
    }
            
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="row">
                        <h4 className="text-dark text-center">New Intern Form</h4>
                        <p className="text-center text-white">{message}</p>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>First-Name</label></div>
                        <div className="col-lg-8"> 
                            <input type="text" className="form-control m-2 " onChange={obj => fProcess(obj.target.value)}  placeholder="Enter Your First Name" value={fname}/>
                        </div>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>Last-Name</label></div>
                        <div className="col-lg-8"> <input type="text" className="form-control m-2 " onChange={obj => lProcess(obj.target.value)} placeholder="Enter Your Last Name" value={lname}/>
                        </div>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>Age</label></div>
                        <div className="col-lg-8"> <input type="text" className="form-control m-2 " onChange={obj => ageProcess(obj.target.value)}  placeholder="Enter Your Age" value={age}/>
                        </div>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>Mobiel-numebr</label></div>
                        <div className="col-lg-8"> <input type="number" className="form-control m-2 " onChange={obj => numberProcess(obj.target.value)}  placeholder="Enter Your Mobile-Number" value={number}/>
                        </div>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>E-mail</label></div>
                        <div className="col-lg-8"> <input type="email" className="form-control m-2 " onChange={obj => mailProcess(obj.target.value)}  placeholder="Enter Your E-mail" value={mail}/>
                        </div>
                    </div>
                    <div className=" row m-2">
                        <div className="col-lg-4 mt-2"> <label>City</label></div>
                        <div className="col-lg-8"> <input type="text" className="form-control m-2 " onChange={obj => cityProcess(obj.target.value)}  placeholder="Enter Your City" value={city}/>
                        </div>
                    </div>

                    <div className="text-center"> <button className="btn btn-primary text-center"
                        onClick={save}>Save</button></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>


    )
}

export default  InternForm;