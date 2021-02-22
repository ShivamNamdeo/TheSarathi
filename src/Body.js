import React,{useEffect,useState} from 'react';
import "./App.css";
import Interest from "./Interest";
import "./search.css";
import Switch from "./switch";
import Loading from "./loading";
import Footer from "./Footer";
import SearchIcon from '@material-ui/icons/Search';

import firebase from 'firebase/app';
import 'firebase/storage';     // for storage

import 'firebase/firestore';   // for cloud firestore



const firebaseConfig = {
  apiKey: "AIzaSyCIaHXVxDlmoPbX6_VJ4r3AvImS9nVduao",
  authDomain: "sarathiadmin.firebaseapp.com",
  databaseURL: "https://sarathiadmin.firebaseio.com",
  projectId: "sarathiadmin",
  storageBucket: "sarathiadmin.appspot.com",
  messagingSenderId: "730406314376",
  appId: "1:730406314376:web:6b709efe0e3c5aff93da3d",
  measurementId: "G-7QC1TG2R9S"
};




firebase.initializeApp(firebaseConfig);


















function Body() {


    
    const [posts,  setposts] = useState([]);
    const [search,  setsearch] = useState("");

    const [loading,  setloading] = useState(true);



    //Fetch notifications Data
  useEffect(() => {


  	 	
  
    const subscriber = firebase.firestore()
      .collection("posts")
      .orderBy('timestamp','desc')
      .onSnapshot(querySnapshot => {
        
        const posts_ = [];
  
        querySnapshot.forEach(documentSnapshot => {
          posts_.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
  
          });
  
        });
  
        
  
        setposts(posts_);
        setloading(false);
        
              //
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []); 


  const SearchText = (e)=>{
    const val = e.target.value
    setsearch(val);

   
  
  }

  const SearchTextSet =(e)=>{
     setsearch(e);

  }

  if(loading){
    return(
       <Loading />
    )
  }




	return (
		<div>

     
       <div className="recent-switch">

           <Switch />
        
         
         </div>


         
			<div className="body">



            <div className="search">
			<h1>Search Feed </h1>


			<div className="center">

			<div className="box" >

				<SearchIcon />
				<input type="text" onChange = {SearchText} value = {search}  />

	

			</div>

			</div>

			


		</div>
    	 	
      	</div>

      	   




        <div  className="filter">
    

          <div className="scrollmenu">

             <div  onClick={()=>SearchTextSet("")}>All Post</div>
             <div onClick={()=>SearchTextSet("internship")}>Internship</div>
              <div  onClick={()=>SearchTextSet("placement")}>Placement</div>
             
            <div  onClick={()=>SearchTextSet("scholarship")}>Scholarship</div>
            <div  onClick={()=>SearchTextSet("government")}>Government Exam</div>
            <div  onClick={()=>SearchTextSet("college")}>College News</div>
            <div onClick={()=>SearchTextSet("school")}>School News</div>
            <div  onClick={()=>SearchTextSet("exam")}>Exam Updates</div>
            <div onClick={()=>SearchTextSet("admission")}>Admission News</div>

          </div>
        </div>

         
      	 <div className="recent-row">




           {posts.map((item,index) => (

           	<div key={item.key}>
           	{
           		(item.title.toLowerCase().includes(search.toLowerCase())) && 
           			

           			<Interest
                  text={item.text}
      				    image={item.image}
    					   title={item.title}
    					   timestamp={item.timestamp}
    					   details={item.text}
                 id={item.key}
                  


      	 			/>
      	 			

           	}
           	</div>

      			


             ))}

      	 		

      	 		

      	 </div>

         <Footer />
      	
		</div>
	)
}

export default Body;