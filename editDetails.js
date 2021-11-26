import React, { useState ,useEffect} from 'react';

import { useParams,Link } from 'react-router-dom';

import axios from 'axios';


   const Edit=()=> {

    const{id}=useParams();
    const [fname, fProcess] = useState("");
    const [lname, lProcess] = useState("");
    const [age, ageProcess] = useState("");
    const [city, cityProcess] = useState("");
    const [number, numberProcess] = useState("");
    const [_id,idProcess]=useState("")
    
    const [mail, mailProcess] = useState("");
   

   
   
    const getData = () => {
        
        
        axios.get("http://localhost:5000/get/"+id).then(res=>{
            idProcess(res.data._id)
            fProcess(res.data.firstname)
            lProcess(res.data.lastname)
            ageProcess(res.data.age)
            cityProcess(res.data.city)
            numberProcess(res.data.number)
            mailProcess(res.data.email)
            
        }
        
        )
            
    }
    useEffect(()=>{
        getData()
    },true)

    const update=()=>{
        var data = {
            _id:_id,
            firstname: fname,
            lastname: lname,
            age: age,
            city: city,
            number: number,
            email: mail
        };
        axios.put("http://localhost:5000/ninjas",data).then(res=>{
           
            fProcess("")
            lProcess("")
            ageProcess("")
            cityProcess("")
            numberProcess("")
            mailProcess("")
            
        }
        
        )
            
    
        

       
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="row">
                        <h4 className="text-primary text-center">New Intern Form</h4>
                        <p className="text-center text-white"></p>
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

                    <div className="text-center"><Link to="/back"> <button className="btn btn-primary text-center"
                        onClick={update}>Update</button></Link></div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>


    )
}

export default  Edit;