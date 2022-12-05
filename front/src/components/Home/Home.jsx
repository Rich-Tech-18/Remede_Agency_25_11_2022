import Background from '../Background/Background';
import HeroContent from '../HeroContent/HeroContent';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import Features from '../Features/Features';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import React from 'react';
import './Home.css';



    


const Home = () => {
    const element = [
    {image : iconChat, imageAlt : "chat Icon", title : "You are our #1 priority", content : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."},
    {image : iconMoney, imageAlt : "Argent Icon", title : "More savings means higher rates", content : "The more you save with us, the higher your interest rate will be!"},
    {image : iconSecurity, imageAlt : "Security Icon", title : "Security you can trust", content : " We use top of the line encryption to make sure your data and money is always safe."},
]
    return (
        <React.Fragment>
            <Background content={<HeroContent />}/>
            <FeaturesSection element={element.map( (arr, index) => {
                return <Features key={index} image={arr.image} imageAlt={arr.imageAlt} title={arr.title} content={arr.content}/>
            }  
            )}/> 
        </React.Fragment>
       
    )
}

export default Home;