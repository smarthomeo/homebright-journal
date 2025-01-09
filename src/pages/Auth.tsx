import { useEffect } from "react";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to SmartHome
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <div className="mt-8">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
            providers={["google"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;