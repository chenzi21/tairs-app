import React from "react";
import styles from "../styles/404.module.scss";
import { useRouter } from "next/router";

export default function PageNotFound() {
	const router = useRouter();
	const handleGoToDetails = () => {
		router.replace("/ContactUs");
	};
	return (
		<div className={styles.pageContainer}>
			<div className={styles.customMessage}>
				<div className={styles.message}>
					Page does not exist, for help please contact us. for our details press
				</div>
				<div className={styles.linkedMessage} onClick={handleGoToDetails}>
					{`HERE`}
				</div>
			</div>
		</div>
	);
}