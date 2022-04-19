import { Menubar } from 'primereact/menubar';
import { useNavigate  } from "react-router-dom";

const Navigation = () => {

  let navigate = useNavigate ();

  const navlist = [
    {label: 'Home', icon: 'pi pi-fw pi-home', command: () => {
      navigate('/')
    }},
    {label: 'About', icon: 'pi pi-fw pi-file', command: () =>{
      navigate('/about')
    }}
  ]

    return(
        <div>
          <nav>
            <ul>
              <Menubar model={navlist} />
            </ul>
          </nav>           
        </div>
    )
}

export default Navigation;
