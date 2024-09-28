import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
	return (
		<section className="not-found_container">
			<h1 className="not-found_title">404 Not Found</h1>
			<Link href="/" className="not-found_link">
				Повернутися на домашню сторінку
			</Link>
		</section>
	)
}
