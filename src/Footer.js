import React from 'react';
import "./Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
function Footer() {
	return (
		<div className="footer">

			<div className="footer_heading">

				<h1>Copyright &#169; The Sarathi </h1>
				
			</div>

			<div className="social_links">
				<a href="https://instagram.com/the.sarathi?igshid=fehrnz7ka3sm"><InstagramIcon /></a>
				<a href="https://m.facebook.com/thesarathi-102271881518387/?__tn__=CH-R"><FacebookIcon /></a>
				<a href="https://www.youtube.com/channel/UCX-3QZR_N2pIiCYRPW8p5ZA"><YouTubeIcon /></a>
				<a href="https://www.linkedin.com/company/the-sarathi"><LinkedInIcon /></a>
				<a href="mailto:sarathi.the@gmail.com"><EmailIcon /></a>
	

			</div>


		</div>
	)
}

export default Footer;