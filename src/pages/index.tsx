import * as S from '@/styles/home_style'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>Times on film</title>
				<meta
					name="description"
					content="Times on film"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<S.Section>
				<Link href="/about">12</Link>
				<Link href="/search">12</Link>
				<Link href="/bookmark">12</Link>
			</S.Section>
		</>
	)
}