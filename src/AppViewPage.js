import React from 'react'
import "./AppViewPage.css";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";

import google from "./assets/download.png";

import Footer from "./Footer";

import Switch from "./switch";





function AppViewPage() {
	return (
		<div className="appview">


			<Switch />

		

			<div className="app">
				<img src={img1} alt="" />


				<p>	
					<a href="https://play.google.com/store/apps/details?id=com.thesarathi">
					<img  className = "google"src={google} alt="" />
					</a>
					<h4> The Sarathi News Feed</h4>

					
						The feed that will help you to keep updated with the latest educational news about your career and 
						in your field of interest. Also, it will help you to solve the dilemma you have in your career as a
						comment on each feed. You can ask questions as anonymously or by your own identity. 
						You can also access your loved articles whenever you want to, just with a click on the star icon.


				</p>


			</div>



			<div className="app">
				


				<p>	
					<h4> User Friendly Chatting Doc Sharing</h4>

					An easy to use platform for users to connect with your friends, colleagues and teachers. 
					You can also share images, docs, links and much more. Shares the moment as a group or individually.



				</p>

				<img src={img2} alt="" />


			</div>


			<div className="app">
				
				<img src={img3} alt="" />

				<p>	
					<h4> Sarathi Classroom Conduct Your Online Quiz or Test</h4>

					The Sarathi classroom is an easy to use, free of cost platform for students as well as teachers to 
					conduct quizzes and online test and also to prepare it in less time with no extra efforts. Check the answers
					 and declare results in less time.Functions to allow only those students in the class which belongs to your 
					 class or the one who is known by you.

				</p>

				


			</div>









			<Footer />


		</div>
	)
}

export default AppViewPage;