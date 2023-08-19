
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
            }
        })
    ],
    pages: {
        signIn: "/#loginModal",
    },
});

export { handler as GET, handler as POST}