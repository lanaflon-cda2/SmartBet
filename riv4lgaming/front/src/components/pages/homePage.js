import React,  {Component} from 'react'
import { connect } from "react-redux"
import { Row, Col, Typography  } from 'antd'

const style = {padding: '8px 30px'};
const { Title } = Typography;

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Homepage extends Component {
  render() {
    console.log(this.props.user);
     return (
       <body>
         <div style={{textAlign: "center"}}>
         <Title level={1} >Riv4lGaming</Title>
          {this.props.user && this.props.user.email !== "" && (
            <Title level={3} style={{color: "red"}}>
              Bonjour à toi {this.props.user.pseudo} ! 
            </Title>
            )
          }
          <Title level={2}>
              <p>Bienvenue sur Riv4lGaming ! </p>
          </Title >
          </div>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Title level={2}>
              <p>Qu'est ce que Riv4lGaming ? </p>
            </Title>
            <p>Riv4lGaming est un site vous permettant de trouver des partenaires avec qui jouer sur vos différents jeu en ligne. 
            Mais ce n'est pas tout, Riv4lGaming vous propose aussi de participer à des tounois sur différents jeux. Ces tournois sont créés soit
            par Riv4lGaming ou par sa communauté. <br />
            Cela vous tente ? Alors n'hésitez plus foncez !
            </p>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Title level={2}>
              <p>Forum</p>
            </Title >
              <p>Comment cette partie du site fonctionne ?<br />
              C'est très simple, vous créez votre annonce en indiquant ce que vous recherchez par exemple : <br />
              "[LOL Mid Gold] Recherche teammates pour ranked."<br />
              Vous indiquez le jeu auquel votre annonce correspond, votre niveau sur ce jeu, et la position que vous jouez(certains jeux ne reprennent pas toutes les carastériques montrées),
              et pour finir le titre de votre annonce résumant pourquoi vous la créée.
              </p>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Title level={2}>
              <p>Tournoi</p>
            </Title >
              <p>Comment cette partie du site fonctionne ?<br/>
              Vous retrouverez sur cette partie du site différents tournois.<br />
              Les tournois seront mis à dispositions de tous.<br />
              Chaque tournoi sera différent en fonction de son créateur. N'importe qui pourra créer un tournoi et définir les paramètres de celui-ci. 
              Les paramètres sélectionnables sont les suivants :<br />
                - avec ou sans loser bracket(Qu'est ce qu'un loser bracket ?)<br />
                - avec ou sans restriction de niveau(tournoi autorisé à tout le monde ou que à certains "rang" sur le jeu)<br />
                - nombre de participants maximum<br />
                - les types de BO en fonction du round dans le tournoi<br />
                - avec ou sans cash prize<br />
              </p>
          </Col>
        </Row>
         <p>Les jeux disponibles sont les suivants : <br /></p> 
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://starcraft2.com/fr-fr/" target="_blank">
              < img src="https://c4.wallpaperflare.com/wallpaper/636/601/259/queen-of-blades-sarah-kerrigan-starcraft-starcraft-ii-wallpaper-preview.jpg" alt="sc2" style={{width:"100%", height:"100%"}}></img>
          </a>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://play.euw.leagueoflegends.com/fr_FR" target="_blank">
              <img src="https://img.lemde.fr/2018/05/22/0/218/1164/582/1440/0/60/0/7fbe49a_10861-9kwk39.j7dht.jpg" alt="LoL" style={{width:"100%", height:"100%"}}></img>
          </a>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://blog.counter-strike.net/" target="_blank">
            <img src="https://image.jeuxvideo.com/medias-md/153573/1535728452-9770-card.jpg" alt="CSGO" style={{width:"100%", height:"100%"}}></img>
          </a>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <a href="https://www.rocketleague.com/" target="_blank">
            <img src="https://image.jeuxvideo.com/medias-md/154823/1548225017-2830-card.jpg" alt="RL" style={{width:"100%", height:"100%"}}></img>
          </a>
        </div>
      </Col>
    </Row>
    </body>
    );
  }
}


export default connect (mapStateToProps) (Homepage);