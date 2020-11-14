import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children, title }) => {
	return (
		<>
            <Head>
                <title>{title}</title>
            </Head>
			<header>
				<nav>
                    {/* TODO: Map links */}
					<ul>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/artists'>
								<a>Artists</a>
							</Link>
						</li>
						<li>
							<Link href='/albums'>
								<a>Albums</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</>
	)
}

export { Layout }
