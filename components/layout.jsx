import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img
            src="https://cdn.icon-icons.com/icons2/1384/PNG/512/sberbank-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95262.png"
            alt="logo"
            width="26"
            height="26"
            className={styles.logo}
          />
          <nav>
            {/* TODO: Map links */}
            <ul className={styles.nav}>
              <li>
                <Link href="/">
                  <a className={styles.active}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/artists">
                  <a>Artists</a>
                </Link>
              </li>
              <li>
                <Link href="/albums">
                  <a>Albums</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/sign-up">
            <a className={styles['sign-up']}>Sign Up</a>
          </Link>
        </header>
      </div>

      <main className={styles.main}>{children}</main>
    </>
  )
}

export { Layout }
