import { useAppContext } from "../context/appContext"

const Alert = () => {
    const { alertType,  alertText } = useAppContext()
    //return <div className={`alert alert-${alertType}`}>{alertText}</div>
    return <div className="invalid-feedback">{alertText}</div>
}
export default Alert