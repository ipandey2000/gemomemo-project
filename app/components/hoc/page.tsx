import { useEffect } from "react";
import { useRouter } from "next/navigation";

// HOC that wraps protected components
const withAuth = (WrappedComponent: React.FC) => {
  const ProtectedRoute: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.push("/loginform");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withAuth;
