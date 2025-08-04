// import jwt from "jsonwebtoken"
// import dotenv from "dotenv"

// dotenv.config()

// const adminAuth=async(req,res,next)=>{
//     try {
//         console.log("inside admin auth")
//         const {token}=req.headers
//         if(!token)
//         {
//             return res.json({
//                 success:false,
//                 message:"Invalid token"
//             })
//         }
//         const token_decode=jwt.verify(token,process.env.JWT_SECRET)
//         if(token_decode.id!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)
//         {
//             return res.status(400).json({
//                 success:false,
//                 message:"Not authorized login"
//             })
//         }
//         next()
        

//     } catch (error) {

//         res.json({
//             success:"false",
//             message:error.message
//         })
        
//     }

// }

// export {adminAuth}

import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const adminAuth = async (req, res, next) => {
    try {
        console.log("inside admin auth");

        // The token is sent in the 'Authorization' header.
        // We get the entire header string, e.g., 'Bearer <token>'.
        const authHeader = req.headers.authorization;

        // Check if the authorization header exists and starts with 'Bearer '
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing or invalid"
            });
        }
        
        // Split the string by the space to get the token part
        const token = authHeader.split(' ')[1];
        
        // Now 'token' holds just the JWT string.
        // If the split failed for any reason, the token would be undefined.
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        // Verify the token using the secret from environment variables
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Ensure the decoded token ID matches the admin identifier
        if (token_decode.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({
                success: false,
                message: "Not authorized login"
            });
        }
        
        // If successful, proceed to the next middleware
        next();
    } catch (error) {
        // If token verification fails, send a 401 Unauthorized response
        res.status(401).json({
            success: false,
            message: "Invalid token. Authorization failed."
        });
    }
};

export { adminAuth };
