'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiUser } from 'react-icons/ci'
import styles from './Header.module.css'

export default function Header() {
	const pathName = usePathname()
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">Encashment</Link>
			</div>
			<div>
				<nav>
					<ul className={styles.navList}>
						<li>
							<Link
								href="/"
								className={
									pathName === '/'
										? `${styles.active} ${styles.navLink}`
										: styles.navLink
								}
							>
								Головна
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={
									pathName === '/about'
										? `${styles.active} ${styles.navLink}`
										: styles.navLink
								}
							>
								Про нас
							</Link>
						</li>
						<li>
							<Link
								href="/contacts"
								className={
									pathName === '/contacts'
										? `${styles.active} ${styles.navLink}`
										: styles.navLink
								}
							>
								Контакти
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.headerLogin}>
				<Link href="/login">Вхід</Link>
				<CiUser size={20} />
			</div>
		</header>
	)
}
