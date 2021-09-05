import { getProviders, signIn } from 'next-auth/client';

// eslint-disable-next-line react/prop-types
export default function SignIn({ providers }) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
}

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: { providers }
    };
};
