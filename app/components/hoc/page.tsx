import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const withAuth = ( Component: React.FC<any> ) =>
{
  const AuthenticatedComponent: React.FC<any> = ( props ) =>
  {
    const router = useRouter();

    useEffect( () =>
    {
      const token = Cookies.get( "authToken" );
      if ( !token )
      {
        router.push( "/loginform" );
      }
    }, [router] );

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
