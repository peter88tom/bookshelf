/*
	Demonstrate conditionaly showing content

	On this example will use 'Show' component to conditionaly show content
	  - The <Show /> takes 'when' prop and optional fallback prop

	  - When the when prop is true, the jsx inside <Show /> is displayed
	  - When the when is false, the jsx inside the fallback is displayed(if provided)



	The below example shows how you would use <Show /> component to conditionally display a sign-in or dashboard page

*/

import { Show } from "solid-js";


function Home(props) {
	return (
		<Show
			when={props.isLoggedin}
			fallback={
				<>
					<div>Welcome to the application please sign in to continue.</div>
					<signInForm />
				</>
			}
			>

			<div>Welcome back, {props.firstName} </div>
			<Dashboard />

		</Show>
	);
}

/*
when props.isLoggedIn is true, we welcome the user and show the dashboard, when is false we display the fallback
and show the sign in page.

*/