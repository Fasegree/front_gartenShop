import s from './NotFoundPage.module.css'
import img4 from './media/4.svg'
import img0 from './media/0.png'
import { Link } from 'react-router-dom'
import ButtonCard from '../../ui/Btns/BtnCard'
import { btnTitles } from '../../CONSTANTS'

export default function NotFoundPage(){
    return(
        <div className="container">

        <div className={s.container}>
            NotFoundPage
            <div className={s.img404}>
                <div ><img src={img4} alt="404" /></div>
                <div ><img src={img0} alt="404" /></div>
                <div ><img src={img4} alt="404" /></div>
            </div>
            <div className={s.text}>
            <h3>Page Not Found</h3>
                <p> We’re sorry, the page you requested could not be found.</p>
                <p>Please go back to the homepage. </p>

                <Link to="/" > 
          
                <ButtonCard title={btnTitles.notFoundGoHome}/>
      </Link>
                {/* <BtnCard action={''} btnText={'Go home'}/> */}
            </div>
        </div>
        </div>
    )
}