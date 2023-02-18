import { Menubar } from 'primereact/menubar';
import { useNavigate  } from "react-router-dom";
import AuthenticationButton from './auth/AuthenticationButton';

const Navigation = () => {

  let navigate = useNavigate ();

  const navlist = [
    {label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
      navigate('/')
    }},
    {label: 'About', icon: 'pi pi-fw pi-file', command: () =>{
      navigate('/about')
    }},
    {label: 'Secured', icon: 'pi pi-fw pi-file', command: () =>{
      navigate('/secured')
    }},
    {label: 'Profile', icon: 'pi pi-fw pi-file', command: () =>{
      navigate('/profile')
    }}
  ]

    return(
        <div>
          <nav>
            <ul> <AuthenticationButton/></ul>
            <ul>
              <Menubar model={navlist} />
            </ul>        
          </nav>           
        </div>
    )
}

export default Navigation;
