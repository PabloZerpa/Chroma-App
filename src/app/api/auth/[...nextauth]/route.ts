
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { connectDB } from "@/libs/mongodb";
// import User from "@/models/user";
// import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'text', placeholder: 'Email'},
                password: { label: 'Password', type: 'password', placeholder: 'Password' }
            },
            async authorize(credentials, req){
                const user = {id: "1", fullname: "Pablo", email: "pablo@gmail.com"};
                return user;

                // await connectDB();

                // const userFound = await User.findOne({email:credentials?.email}).select("+password");
                // if(!userFound) throw new Error("Invalid Credentials")
                
                // const passwordMatch = await bcrypt.compare(credentials!.password,userFound.password);
                // if(!passwordMatch) throw new Error("Invalid Credentials");

                // console.log(userFound);
                // return userFound;
            }
        })
    ],
    pages: {
        signIn: "/#loginModal" || "/#registerModal",
    },
    // session: {
    //     strategy: "jwt",
    // },
    // callbacks: {
    //     async jwt({ account,token,user,profile,session }){
    //         if(user) token.user = user;
    //         return token;
    //     },
    //     async session( session: any, token: { user: any; } ) {
    //         session.user = token.user as any
    //         return session;
    //     },
    // },
});

export { handler as GET, handler as POST}