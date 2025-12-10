// config/passport.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {User, IUser } from "../models/user.model";
import dotenv from "dotenv"
dotenv.config()

passport.serializeUser((user: any, done) => {
  done(null, (user as IUser)._id.toString());
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user || undefined);
  } catch (err) {
    done(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value || "";
        const username =
          profile.displayName || profile.name?.givenName || "Google User";
        const avatar = profile.photos?.[0]?.value || "";

        // 1. Try find by googleId
        let user = await User.findOne({ googleId });

        // 2. If not found, try by email
        if (!user && email) {
          user = await User.findOne({ email });
          if (user) {
            // existing custom account -> upgrade loginType and set googleId
            user.googleId = googleId;
            user.loginType =
              user.loginType === "custom" ? "both" : user.loginType;
            await user.save();
          }
        }

        // 3. If still not found, create new user
        if (!user) {
          user = await User.create({
            username,
            email,
            password: null,
            role: "user",
            avatar,
            loginType: "google",
            googleId,
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as any, undefined);
      }
    }
  )
);

export default passport;
