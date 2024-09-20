import { Link } from "react-scroll"
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>  Sathya </h1>
                <p> A Professional Web Developer </p>
                <a href= "https://drive.google.com/file/d/1OjPFJxxY_7CnF-h7rowIEDeFIrwAEnFG/view?usp=drive_link" >
                    <button className="topContent__downloadButton">Download CV</button>
                </a>

                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent__workButton">My Work</button>
                </Link>
            </div>

        </div>
    )
}

export default TopContent
