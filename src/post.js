import React, {useState,useEffect}from 'react';
import firebase from 'firebase';
import "./post.css";
import Swicth from "./switch";
import Loading from "./loading";
import AutoLinkText from 'react-autolink-text2';

import Interest from "./Interest";
import Footer from "./Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



import {Helmet} from "react-helmet";







function Post() {


	const [posts,  setposts] = useState([]);

	 const [loading,  setloading] = useState(true);

     let { id } = useParams();


     console.log(id)

	const[data,setdata] = useState({})

	const item_id = window.location.search.substring(1,window.location.search.length);



	useEffect(() => {




	const subscriber = firebase.firestore()
      .collection("posts")
      .doc(id)
      .onSnapshot(querySnapshot => {
        
        console.log(querySnapshot.data());
        setdata(querySnapshot.data());
  
        
              //
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();



	}, [id]);

	
    //Fetch notifications Data
  useEffect(() => {


  	 	
  
    const subscriber = firebase.firestore()
      .collection("posts")
      .orderBy('timestamp','desc')
      .limit(6)
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


if (loading) {
	return(
		<div>
			<Loading />
		</div>
	)

}

	return (
		<div>

			<Swicth />

       <Helmet>
           <meta charSet="utf-8" />
           <title>{data.title}</title>
           <meta name="description" content={data.text} />
       </Helmet>


			<div className="post_main">
			 	<div className="post">
				
			 		<p className="title">{data.title}</p>
					<img className="post_image_wi" src={data.image} alt=""/>
					
				
					<pre className="content" >
						<AutoLinkText text={data.text} className="content_color" />,

					</pre>

			 	</div>


			 	<div className="tags">

			 		<h1>Latest Posts</h1>
			 		<div >

						{posts.map((item,index) => (

           				<div > 
           				

           				<Interest
                      text={item.text}
      				    	image={item.image}
    					   title={item.title}
    					   timestamp={item.timestamp}
    					   details={item.text}
                 			id={item.key}
                  		/>
      	 			

           				
           				</div>

      			


             			))}
					
					</div>

			 	</div>
			 </div>

			 <Footer />

		</div>
	)
}

export default Post;