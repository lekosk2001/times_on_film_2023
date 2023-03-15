import Link from 'next/link';
import React from 'react'
import * as S from './Layout_style';

type Props = {
    children: JSX.Element;
}

const Layout = (props: Props) => {
    return (<>
        <S.Header>
            <Link href={`/`}>
                <S.Logo>
                    <S.LogoSub>역사별 컨텐츠 검색엔진</S.LogoSub>
                    <h2>TIMES ON FILM</h2>
                </S.Logo>
            </Link>
            <S.Nav>
                <S.NavItem><Link href="/">홈</Link></S.NavItem>
                <S.NavItem><Link href="/about">소개</Link></S.NavItem>
                <S.NavItem><Link href="/search">검색</Link></S.NavItem>
                <S.NavItem><Link href="/bookmark">보관함</Link></S.NavItem>
            </S.Nav>
        </S.Header>
        <S.Main>{props.children}</S.Main>
    </>
    )
}

export default Layout