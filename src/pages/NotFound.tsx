import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center container-elegant">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Error 404
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
