import React from "react";
import type {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export default Layout;