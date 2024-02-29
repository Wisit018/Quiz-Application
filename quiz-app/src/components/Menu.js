import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return (
        <div className="menu">
            <h1>Quiz Application</h1>
            <button onClick={()=>setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu