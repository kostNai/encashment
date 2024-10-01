'use client'

import Link from 'next/link'
import styles from './ProfileLinks.module.css'
import { usePathname } from 'next/navigation'

export default function ProfileLinks() {
	const path = usePathname()

	return (
		<div className={styles.profileLayoutLinks}>
			<Link
				href="/profile/new-operation"
				className={path === '/profile/new-operation' ? styles.active : ''}
			>
				Створити винесення
			</Link>
			<Link
				href="/profile/history"
				className={path === '/profile/history' ? styles.active : ''}
			>
				Історія
			</Link>
		</div>
	)
}
