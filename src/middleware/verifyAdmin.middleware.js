import { ApiError } from "../utils/apiError.js";

export const verifyAdmin = (req, res, next) => {
    const adminKey = req.headers["x-admin-key"];

    if (!adminKey) {
        throw new ApiError(401, "Unauthorized: Admin key is missing");
    }

    if(adminKey !== process.env.ADMIN_KEY){
        throw new ApiError(401, "Unauthorized: Invalid admin key");
    }
    next();
}