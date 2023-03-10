import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser
function signIn({ providers }) {
  return (
    <>  
        <Header />

        <div 
            className="flex flex-col items-center justify-center py-2 min-h-screen -mt-20 px-14 text-center"
        >
            <img
                src="https://links.papareact.com/ocw"
                alt="Instagram logo"
                className="w-full sm:w-80"
            />

            <p className="text-xs italic my-6">
                This is not a REAL app, it is build for educational purposes only
            </p>
            <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button 
                            onClick={() => signIntoProvider(provider.id, { callbackUrl: '/' })}
                            className='p-3 bg-blue-500 rounded-lg text-white'    
                            >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

// Server
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
