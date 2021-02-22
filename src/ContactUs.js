import React,{useState} from 'react';
import "./ContactUs.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import Switch from "./switch";
import Footer from "./Footer";


import firebase from "firebase";

function ContactUs() {


	const [student_p,setstudent_p] = useState(true);
	const [bussiness_p,setbussiness_p] = useState(false);
	const [name,setname] = useState("");
	const [contact,setcontact] = useState(0);
	const [email,setemail] = useState("");
	const [question,setquestion] = useState("");


	const send_contact_us_data = ()=>{

		if(student_p){
			firebase.firestore()
			.collection("query")
			.add({
				query_from:"student",
				name,
				email,
				contact,
				question,
			},{merge:true});
		}else{
			firebase.firestore()
			.collection("query")
			.add({
				query_from:"buiness",
				name,
				email,
				contact,
				question,
			},{merge:true});
		}



		alert("Sent");
		setTimeout(window.location.reload(true), 1000);
	}


	const setquestion_fun =(e)=>{
		const val = e.target.value
    	setquestion(val);
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



	const handle= ()=>{
		if (!student_p) {
			setstudent_p(true);
			setbussiness_p(false);

		}else if (!bussiness_p) {
			setbussiness_p(true);
			setstudent_p(false);


		}else{
			setbussiness_p(false);
			setstudent_p(false);
		}


	}



	return (
		<div className="contact">
			<Switch />

			<div className="heading" >
				<h1>Contact Us</h1>
			</div>

				
			
			

			<div className="grid">
				

				<div >
					
					<div>
					{
						student_p && 
						<div className="contact_data">
							<div className="row_align">
								<h2 className="contact_heading"> For   </h2>
								<div className="button_active" onClick={handle}><span>Student</span></div>
								<div className="button" onClick={handle}><span>Business</span></div>

								
							</div>
							<h3 className="subhead">
							 	Email us or contact us for any questions or queries.
							 	 We would be happy to solve your problems and set up a meeting with you. 
							 	 The Sarathi can help you set apart from the competition.
							</h3>

							

						</div>


					}
					</div>

					<div>
					{
						bussiness_p && 
						<div className="contact_data">
							<div className="row_align">
								<h2 className="contact_heading"> For  </h2>
								<div className="button" onClick={handle}><span>Student</span></div>

								<div className="button_active" onClick={handle}><span>Business</span></div>

								
							</div>
							<h3 className="subhead">
							 	Want to grow digitally !! Want a step ahead of your competitors !!
							 	 Then drop a mail or contact us. We would happy to help you in your 
							 	 growth and set up a meeting with you.
							</h3>

						</div>


					}


					<div>
						<div className="contact_data">
						<h1 className="sarathi_social">@The Sarathi Social Media Handles</h1>
							<a href="https://instagram.com/the.sarathi?igshid=fehrnz7ka3sm"><InstagramIcon /></a>
							<a href="https://m.facebook.com/thesarathi-102271881518387/?__tn__=CH-R"><FacebookIcon /></a>
							<a href="https://www.youtube.com/channel/UCX-3QZR_N2pIiCYRPW8p5ZA"><YouTubeIcon /></a>
							<a href="https://www.linkedin.com/company/the-sarathi"><LinkedInIcon /></a>
							<a href="mailto:sarathi.the@gmail.com"><EmailIcon /></a>
					</div>
							

					</div>

					</div>





						


					

				</div>


				<from className="form" >

					<h1>Please fill the enquiry form</h1>
					<input type="text" className="input_text" placeholder="Your Name" required onChange={setname_fun}/>
					<input type="email" className="input_text" placeholder="Email" required onChange={setemail_fun} />
					<input type="number" className="input_text" placeholder="Contact No" required onChange={setcontact_fun} />
					<input type="text" className="input_text" placeholder="Your Question" required onChange={setquestion_fun} />

					<input type="submit" className="submit_button" value="Submit" onClick={send_contact_us_data}/>

				</from>




			</div>

			<Footer />
			


		</div>
	)
}

export default ContactUs