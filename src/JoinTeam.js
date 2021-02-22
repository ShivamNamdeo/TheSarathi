import React,{useState} from 'react';
import "./JoinTeam.css";
import Switch from "./switch";
import Footer from "./Footer";
import firebase from "firebase";


function JoinTeam() {


	const [name,setname] = useState("");
	const [contact,setcontact] = useState(0);
	const [email,setemail] = useState("");
	const [resume,setresume] = useState("");
	const [linkedin,setlinkedin] = useState("");

	const send_join_us_data = ()=>{

			firebase.firestore()
			.collection("join_us")
			.add({
				name,
				email,
				contact,
				resume,
				linkedin,

			},{merge:true});
		


		alert("Sent");
		setTimeout(window.location.reload(true), 1000);
	}

	const setname_fun =(e)=>{
		const val = e.target.value
    	setname(val);

	}
	const setemail_fun =(e)=>{
		const val = e.target.value
    	setemail(val);
	}
	const setcontact_fun =(e)=>{
		const val = e.target.value
    	setcontact(val);
	}
	const setresume_fun =(e)=>{
		const val = e.target.value
    	setresume(val);
	}
	const setlinkedin_fun =(e)=>{
		const val = e.target.value
    	setlinkedin(val);
	}





	return (
		<div className="jointeam">
			<Switch />

			<div className="heading_join">
				<h1>Join Our Team</h1>

			</div>

		

			<div className="join_form">
					<h1>Please fill the enquiry form</h1>
					<input type="text" className="join_form_text" placeholder="Your Name" required onChange={setname_fun} />
					<input type="email" className="join_form_text" placeholder="Email" required onChange={setemail_fun} />
					<input type="number" className="join_form_text" placeholder="Contact No" required onChange={setcontact_fun} />
					<input type="text" className="join_form_text" placeholder="Your Resume Link" required onChange={setresume_fun} />
					<input type="text" className="join_form_text" placeholder="Your Linkedin Profile Link" required onChange={setlinkedin_fun}/>

					<input type="submit" className="join_submit_button" value="Submit" onClick={send_join_us_data} />


			</div>

			<Footer />

		</div>
	)
}

export default JoinTeam;