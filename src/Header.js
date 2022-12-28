import { useContext } from "react"
import ChangeLanguage from "./ChangeLanguage"

export default function Header (){
    const selectedLaguage = useContext(ChangeLanguage)
    
    return(
        <nav>
            <div className="left-div">
                <li><a href="#" className={selectedLaguage.language}> </a></li>
                <li><a href="#" className={selectedLaguage.language+1}> </a></li>
                <li><a href="#" className={selectedLaguage.language +2}>  </a></li>
            </div>
            <div className="right-div">
                <button onClick={() => selectedLaguage.setLanguage("geo")}>GEO</button>
                <button onClick={() => selectedLaguage.setLanguage("eng")}>ENG</button>
            </div>
        </nav>
    )
}