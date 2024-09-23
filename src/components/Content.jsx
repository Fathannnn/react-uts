import '../style/content.css'
import mcd from '../images/mcd.png';
import burger from '../images/chessburger.png'

 function Content() {
    return (
        <>
            <div className="content">
                <img src={mcd} alt="" srcset="" />
                <div className="text">
                    <h1>Promo Menarik</h1>
                </div>
                <img src={burger}></img>
            </div>
        </>
    )
}

export default Content;