import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from "graphql-request";

const ME_QUERY = `
{
  me {
    _id
    name
    email
    picture
  }
}
`;

const Login = ({ classes }) => {
	const onSuccess = async (googleUser) => {
		const idToken = googleUser.getAuthResponse().id_token;

		const client = new GraphQLClient("http://localhost:4000/graphql", {
			headers: { authorization: idToken }
		});

		const data = await client.request();
		console.log({ data });
	};

	return (
		<GoogleLogin
			clientId="721762092596-dlbsi4mv2cgm8eh400eevt9v5ggr4ogv.apps.googleusercontent.com"
			onSuccess={onSuccess}
			isSignedIn={true}
		/>
	);
};

const styles = {
	root: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center"
	}
};

export default withStyles(styles)(Login);
