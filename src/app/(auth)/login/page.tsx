import LoginForm from '@/components/loginForm/LoginForm'
import styles from './login.module.css'
import React from 'react'

export default function LoginPage() {
	return (
		<div className={styles.login}>
			<LoginForm />
		</div>
	)
}
