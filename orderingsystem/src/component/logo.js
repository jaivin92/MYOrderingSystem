import myLogo from '../assets/images/unnamed.png'
const logo = () => {
    return (
        <div className="logo d-flex align-items-center">
        <img src={myLogo} alt="" />
        <span className="d-none d-lg-block">Jaivin</span>
         </div>
    );
};

export default logo;