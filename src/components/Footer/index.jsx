import s from './Footer.module.css'
import instagrammIco from './media/ic-instagram.svg'
import whatsappIco from './media/ic-whatsapp.svg'
export default function Footer(){
    return(
        <div className='container'>

        <footer className=' wrapper'>
            {/* <h2 className={s.contact}>Contact</h2> */}
            <h2 >Contact</h2>
            <div className={s.content}>

            <div>
                <p>Phone</p>
                <h3><a href="tel:+499999999999">+49 999 999 99 99</a></h3>
            </div>
            <div>
                <p>Socials</p>
                <div>

                    <a href="https://www.instagram.com/tel_ran/">

                    <img src={instagrammIco} alt="instagram" />
                    </a>
                    <a href="#">

                    <img src={whatsappIco} alt="whatsapp" />
                    </a>
                </div>
            </div>
            <div>
                <p>Adress</p>
                <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
            </div>
            <div>
                <p>Working Hours</p>
                <h3>24 hours a day</h3>
            </div>
            </div>
           
                <iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=+(telran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/population/">Calculate population in area</a>
                </iframe>
          
        </footer>       
        </div>
    )
}