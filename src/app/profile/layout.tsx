import Link from 'next/link'
import styles from './profile.module.css'
import ProfileLinks from '@/components/profileLinks/ProfileLinks'
export default function ProfileLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section className={styles.profileLayout}>
			<h2 className={styles.profileLayoutTitle}>Привіт, користувач</h2>
			<ProfileLinks />
			{children}
		</section>
	)
}
