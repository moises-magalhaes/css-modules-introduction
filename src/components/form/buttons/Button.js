import React from "react";
import styles from "./Button.module.css";
import dangerStyles from "./Danger.module.css";

function Button(props) {
	let extraClass = null;
	console.log(props);
	if (props.variant === "danger") {
		extraClass = dangerStyles.danger;
	}
	return (
		<Button className={`${styles.button} ${extraClass}`}>
			{props.children}
		</Button>
	);
}

export default Button;
