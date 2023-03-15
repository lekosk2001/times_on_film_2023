import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    padding: 0px 40px;
    justify-content: space-between;
    height: 70px;
    display: flex;
    border-bottom:1px solid var(--color_20per);
    align-items: center;
    background-color: var(--color_10per);
`

export const Logo = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const LogoSub = styled.p`
    color: var(--color_80per);
`


export const Nav = styled.ul`
    display: flex;
`


export const NavItem = styled.li`
    a{
        padding: 15px;
        transition: all 0.2s ease;
        &:hover{
            color: var(--color_blue);
        }
    }
`


export const Main = styled.main`
padding: 40px 20px;
`