import Head from "next/head"
import Link from "next/link"

import {
  HeaderWrapperStyled,
  HeaderStyled,
  NavStyled,
  LinkStyled,
  SignUpStyled,
  MainStyled,
  LogoStyled,
} from "./styles"

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderWrapperStyled>
        <LogoStyled>Sberify</LogoStyled>
        <HeaderStyled>
          <NavStyled>
            <ul>
              <li>
                <Link href="/">
                  <LinkStyled active>Home</LinkStyled>
                </Link>
              </li>
              <li>
                <Link href="/artists">
                  <LinkStyled>Artists</LinkStyled>
                </Link>
              </li>
              <li>
                <Link href="/albums">
                  <LinkStyled>Albums</LinkStyled>
                </Link>
              </li>
            </ul>
          </NavStyled>
          <Link href="/sign-up">
            <SignUpStyled>Sign Up</SignUpStyled>
          </Link>
        </HeaderStyled>
      </HeaderWrapperStyled>
      <MainStyled>{children}</MainStyled>
    </>
  )
}

export { Layout }
