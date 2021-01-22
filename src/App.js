import "./App.css";
import TermsContent from "./components/content/termsContent/TermsContent";
import Container from "./components/layout/Container";
import LoginButton from "./components/form/loginButton/LoginButton";
import Form from "./components/form/Form";
import PageHeading from "./components/typography/PageHeading";
import FormHeading from "./components/typography/FormHeading";
import Input from "./components/form/inputs/Input";
import AccentedInput from "./components/form/inputs/AccentedInput";
import Button from "./components/form/buttons/Button";
import FormContainer from "./components/layout/FormContainer";

function App() {
	return (
		<Container>
			<PageHeading>CSS Modules</PageHeading>
			<FormContainer>
				<div>
					<FormHeading>Rules</FormHeading>
					<p>
						Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean quis sapien ultrices, eleifend nunc a, finibus nisi.
						Suspendisse in velit ac libero tristique laoreet. Integer ultrices
						urna sit amet nibh imperdiet, non sollicitudin felis sollicitudin.
					</p>
				</div>
				<div>
					<Form>
						<FormHeading>Register</FormHeading>
						<Input placeholder="Name" />
						<AccentedInput placeholder="City" />
						<Button>Register</Button>
						<Button variant="danger">Clear</Button>
					</Form>
				</div>
				<div className="col-login">
					<LoginButton />
				</div>
				<div>
					<FormHeading>Terms</FormHeading>

					<TermsContent />
				</div>
			</FormContainer>
		</Container>
	);
}

export default App;
