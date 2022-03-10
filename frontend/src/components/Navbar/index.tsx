
import{ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css';

function Navbar(){ //funcao Javascript
return(   
    //container é uma classe do bootstrap
    <header>
      <nav className="container"> 
        <div className="dsmovie-nav-content">
         <h1>DSMovie</h1>
           <a href="https://github.com/mayaraolivindo21">
      
             <div className="dsmovie-contact-container">
                 <GithubIcon/>

                   <p className="dsmovie-contact-link">/devsuperior</p>
               </div>
              </a>
             </div>
        </nav>
    </header>
    );

}
export default Navbar;
