import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4">
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found on Code Joy Academy."
        path={location.pathname}
        robots="noindex, nofollow"
      />
      <div className="w-full max-w-lg rounded-2xl border bg-card/90 p-8 text-center shadow-lg backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Page Not Found</p>
        <h1 className="mt-2 text-6xl font-extrabold">404</h1>
        <p className="mt-4 text-muted-foreground">
          We couldn't find <span className="font-medium text-foreground">{location.pathname}</span>. Let's get you back to a valid page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View Programs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
