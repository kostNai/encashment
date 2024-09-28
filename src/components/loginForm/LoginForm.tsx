import Link from 'next/link'
import styles from './LoginForm.module.css'

export default function LoginForm() {
	return (
		<section className={styles.container}>
			<h2 className={styles.formTitle}>Вхід</h2>
			<form action="" className={styles.form}>
				<label htmlFor="login" className={styles.loginFormLabel}>
					Логін
					<input type="text" className={styles.loginFormInput} />
				</label>
				<label htmlFor="password" className={styles.loginFormLabel}>
					Пароль
					<input type="password" className={styles.loginFormInput} />
				</label>
				<div className={styles.loginFormBtns}>
					<button
						type="submit"
						className={`${styles.btn} ${styles.btnSuccess}`}
					>
						Вхід
					</button>
				</div>
			</form>
		</section>
	)
}
