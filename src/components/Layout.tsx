import React from "react";
import type {ReactNode} from "react";
import NavBar from "./NavBar";

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            {/** NavBar component */}
            <NavBar/>
            <div className="flex flex-col items-center justify-center mt-20">
                {children}
            </div>
        </>
    )
}

export default Layout;