import icon from '../../assets/img/icone de notificacao.svg'

import './styles.css'

function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton