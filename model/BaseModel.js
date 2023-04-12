export class BaseModel{
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        if(status){
            this.data = data;
        } else {
            this.error = data
        }
    }
}


// const BaseModel = ({responseData}) => {
//     const responseStatus = false;
//     const message = responseStatus ? "Success": "Fail";
//     const data = responseData;

// }
// export default BaseModel;