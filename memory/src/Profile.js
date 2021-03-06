import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class Profile extends Component {
  render() {
  return (
    /**
     * Boutouns de routage pour accéder au formulaires d'ajout et de saisie 
     */
    <div ClassName="Profile" style={{width:'full'}}>     
     <body>
       
    <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'10%'}}>
   
    <h1 class="display-4" >Bienvenue à Votre Profile</h1>
    <br/>
    <h3 class="display-5" style={{color:'#088A85'}}>Gestion De Scolarité</h3>
  
    <p class="lead">Vous Pouvez Ajouter Un Etudiant Ou Bien Saisir Les Notes D'Un Etudiant.</p>
    <hr/>
    <p class="lead">
    <span> 
        <Button  name="connecter" size="lg" variant="dark">
        <Link to="/ajouter" >
          Ajouter Etudiant
        </Link>
        </Button>
        <br/>
        <br/>
        <Button   name="connecter" size="lg" variant="dark">
        <Link to="/saisir">  
          Saisir Les Notes   
        </Link>  
         </Button>
    </span>
    </p>
    </div>
    
    </body>
    <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous"
      />
   
    </div>   
    
  );
}
}
export default Profile;
