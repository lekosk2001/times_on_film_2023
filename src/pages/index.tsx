import * as S from '@/styles/home_style'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (
		<S.HomeContainer>
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
				<Link href="/about">
					<p>소개 및 이용안내</p>
					<h2>타임즈 온 필름이란?</h2>
					<p>역사 컨텐츠 등재기준 및 서비스 취지를 확인해보세요.</p>
				</Link>
				<Link href="/search">
					<p>컨텐츠 찾기</p>
					<h2>시대별로 정리된 영화와 드라마</h2>
					<p>고대부터 현대까지 역사를 담은 컨텐츠들을 정리했습니다.</p>
				</Link>
				<Link href="/bookmark">
					<p>내가 찜한 컨텐츠</p>
					<h2>컨텐츠를 찜하고, 평가를 공유</h2>
					<p>역사 컨텐츠 등재기준 및 서비스 취지를 확인해보세요.</p>
				</Link>
			</S.Section>
		</S.HomeContainer>
	)
}