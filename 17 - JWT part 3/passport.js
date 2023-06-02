import * as dotenv from "dotenv"
dotenv.config()
import passport from "passport"
import passportJWT from "passport-jwt"
import {db} from "./controllers/db.js"

const { SECRET } = process.env;

passport.use(
    new passportJWT.Strategy({
        secretOrKey: SECRET,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    }, async (payload, done) => {
        const user = await db.one(`SELECT * FROM develhope.users WHERE id=$1`, payload.id);
        console.log(user);
        try {
            return user ? done(null, user) : done(new Error("User not found."))
        } catch (error) {
            done(error);
        };
    })
)
