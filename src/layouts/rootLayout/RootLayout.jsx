import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { SignedIn, UserButton } from "@clerk/react-router";




const RootLayout = () => {
  return (
   
      <div className="rootLayout">
        <header>
          <Link className="logo">
            <img src="/logo.png" alt="logo" />
            <span>Chat GPT</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
             

          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    
  );
};

export default RootLayout;
