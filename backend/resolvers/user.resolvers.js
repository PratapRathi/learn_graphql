import User from "../models/user.modal.js";
import Transaction from "../models/transaction.modal.js";
import bcrypt from "bcryptjs";

const userResolvers = {
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const { username, name, password, gender } = input;
        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required");
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error("User already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const profilePic = `https://avatar.iran.liara.run/public/${
          gender === "male" ? "boy" : "girl"
        }?username=${username}`;

        const user = await User.create({
          username,
          name,
          password: hashedPassword,
          gender,
          profilePicture: profilePic,
        });
        await context.login(user);
        return user;
      } catch (err) {
        console.error("Error in SignUp: " + err);
        throw new Error(err.message || "Something went wrong");
      }
    },

    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return user;
      } catch (err) {
        console.error("Error in Login: " + err);
        throw new Error(err.message || "Something went wrong");
      }
    },

    logout: async (_, __, context) => {
      try {
        await context.logout();
        const { req, res } = context;
        req.session.destroy((err) => {
          if (err) throw err;
        });
        res.clearCookie("connect.sid");
        return { message: "Logged out successful" };
      } catch (err) {
        console.error("Error in Logout: " + err);
        throw new Error(err?.message || "Something went wrong");
      }
    },
  },
  Query: {
    authUser: async (_, __, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.error("Error in SignUp: " + err);
        throw new Error(err.message || "Something went wrong");
      }
    },
    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (err) {
        console.error("Error in SignUp: " + err);
        throw new Error(err.message || "Something went wrong");
      }
    },
  },

  // TODO => ADD USER TRANSACTION RELATIONSHIP
  User: {
    transactions: async (parent) => {
      try {
        const transactions = await Transaction.find({ userId: parent._id });
        return transactions;
      } catch (err) {
        console.error("Error in User transactions: " + err);
        throw new Error(err.message || "Something went wrong");
      }
    },
  },
};

export default userResolvers;
