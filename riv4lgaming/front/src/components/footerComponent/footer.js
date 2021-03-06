import React,  {Component} from 'react'
import{
   Link 
 }  from 'react-router-dom'
 import { Row, Col } from 'antd';

class Footer extends Component {
  render() {
     return (
      <footer>
         <Row gutter={[8, 8]}>
            <Col span={8}> 
               <h2>Riv<a href='/cache'>4</a>l<span>Gaming</span></h2>
               <Link to="/">Acceuil </Link>         
               <Link to="/commu">Communauté  </Link>        
               <Link to="/tournois">Tournois </Link>           
               <Link to="/faq">Faq </Link>           
               <p>Riv4lGaming © 2020</p> </Col>
            <Col span={8}>               
               <p><span>Rue ciseaux</span> Louvain La Neuve, Belgique</p>               
               <p>0470.34.16.01</p> 
               <p><a href="mailto:support@company.com">support@Riv4lGaming.com</a></p>
            </Col>
            <Col span={8}>
               <span>A propos</span>
               <p>Riv4lGaming est un projet étudiant qui à pour objectif de créer un site web sur le thème des tournois de jeux vidéos.</p>
                  <a href="https://www.facebook.com/" target="_blank"><i ><img style={{width:"35px", height:"35px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU7WZj///8mS5Hb4OotT5OwudDO0+EhSJAzU5WBkbjw8vfn6vH19vk4V5cpTZIvUZSbp8W6wteToMFVbaN7jLWps828xNfIzt/h5e1xhLCjrspHY50cRY9ofKs/XZqcqMYGPYtsgK7T2eVacqZU4uWuAAAC00lEQVR4nO3ce2+iQBSGcXZEodUBe/FWW1vp9/+Ou026l6xrM8Ce8J7J8/xvwi/IDB7UoiAiIiIiIiIiIiIiIiIiIiIiIhfFui6bJnxUXStMfZADi7H8gXp4XG+2u2623y+vNvNIjG1oD5vF7beUbqupD7d3bfXwNEvCuRTGpl0v03n+hOF414vnTVjGbV+fK2F8vu/v8ySsix7Li0dh8zLI50cYbgYCvQjDoEvQkbAZfAadCOuh16AXYSxGAF0Iq2HbhB9hOXyVcSKsRwEdCJve99rOhPE0DqgvHHsK9YUjr0J9YT1uIXUgrPaZC+NxLFBd2L7mLgxd7sJqNFBcGMd8bHIhbJ9yFza73IVVvwG+Q2EYD9QWDtjvVxctlZ8fxnMfXLc+n9rLZ8HKwF633fM2tDHGqQ+5Zz02i3fpU3W1cp4KPJRTH+uwmtTHhQvl9fKrkjf8Qz31oQ4s+ZNF6W2F+VmqcOn1TVqExHH+wudCWqQLt05X0nThXfbCOULZECLUDyFC/RAi1A8hQv0QIhQrhoveUoXPl6/9VaMyh4vnbvF3u1WacHnxyj/qTiLEesRXub9OZRBnJpR5Qmom3Gd/DnfN1LTPzIQyw1Qz4Ws7Ne0zM+GNypM3M+FZZDu0Ex6zF6psFmbClcqGbybUeT5sJeyyf5duVW5pzIQblVsaM+G9yoZvJnzMXviusuGbCad2/c5KKLOUWgllZhhmQqF/iTISyswwzIRC43AjocwMw0woM8MwE77IbPhWQpkZhpmwzV2oM8OwEir9rMtGqDPDKD7+r/Oi5Kfcob6S+k+9koVXb83Egbl9U+EfIUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPoh/D/C7zcLQMyU9ofIAAAAAElFTkSuQmCC"></img></i></a>
                  <a href="https://twitter.com" target="_blank"><i ><img style={{width:"35px", height:"35px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDE0n9vCfD2ilPR0d8iAnalumrfMME2muC5vUhzGjSB-WLJnEn"></img></i></a>
                  <a href="https://fr.linkedin.com/" target="_blank"><i ><img style={{width:"35px", height:"35px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQQiI56jFu1b6Pu_oIrLS3QHrS9xBmQXmnTdCALGgp1A115Q4i"></img></i></a>
                  <a href="https://github.com/AlexandreLefevre/SmartBet" target="_blank"><i ><img style={{width:"35px", height:"35px"}} src="data:image/png;base64,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"></img></i></a>
            </Col>
         </Row>
   </footer>
     );
  }
}

export default Footer;