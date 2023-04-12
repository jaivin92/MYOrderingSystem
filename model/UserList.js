import mongoose from "mongoose";

const UserScheme = new mongoose.Schema([{
    UserList:[]

}
]);

export default mongoose.model("userlist", UserScheme);
