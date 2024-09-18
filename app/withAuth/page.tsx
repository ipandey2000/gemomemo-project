"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.FC) => {
  const ProtectedRoute: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        router.push("/loginform"); // Redirect to login if not authenticated
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
};

export default withAuth;
