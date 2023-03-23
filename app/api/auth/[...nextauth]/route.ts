import NextAuth, {
	NextAuthOptions,
	CredentialsProvider
} from "next-auth/providers";

type Credentials = {
	email: string;
	password: string;
};

type User = {
	id: string;
	name: string;
	email: string;
};

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider<Credentials>({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "jsmith@example.com"
				},
				password: {
					label: "Password",
					type: "password"
				}
			},
			async authorize(
				credentials: Credentials,
				req: any
			): Promise<User | null> {
				const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
				return user;
			}
		})
	],
	session: { jwt: true }
};

export default NextAuth(authOptions);
