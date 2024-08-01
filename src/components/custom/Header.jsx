
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="p-3 px-5 flex justify-between shadow-md">
        <img src="/CareerCraft_logo.png" width={100} height={300} />
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </>
  );
}

export default Header;
