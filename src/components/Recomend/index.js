
import s from './Recomend.module.css'
import ButtonCard from "../../ui/Btns/BtnCard";
import { isPage } from '../../App';
import { btnTitles } from '../../CONSTANTS';

export default function Recomend( {handleClick} ){

    return(
        <div className={s.content}>
            <div className="wrapper">
            <h1>Amazing Discounts <br/> on Garden Products!</h1>
        
          
          <ButtonCard action={handleClick} type={isPage.home} title={btnTitles.homePageBanner} />
 

            {/* <BtnCard action={scrollByKey} btnText='CheckOut'/> */}
            </div>
        </div>
    )
}

