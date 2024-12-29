import passport from "passport";
import bcrypt from "bcryptjs";
import User from "../models/user.modal.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const configurePassport = async () => {
    passport.serializeUser((user, done) => {
        console.log("serializing user...");
        done(null, user._id);
    })

    passport.deserializeUser(async (id, done) => {
        console.log("deserializing user...");
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    })

    passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({ username });
                if (!user) {
                    throw new Error("User not found");
                }
                const validPassword = await bcrypt.compare(password, user.password);
                if (!validPassword) {
                    throw new Error("Invalid password");
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        })
    )
}