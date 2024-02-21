import s from './BtnBanner.module.css'

export default function BtnBanner({action, btnText}){
    return (
        <>
            <button className={s.btn} onClick={action}>{btnText}</button>
        </>
    )
}