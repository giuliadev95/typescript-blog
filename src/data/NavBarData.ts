import { FaHome } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import type { NavItem } from "../types/NavItem";

export const NavBarData: NavItem[] = [
    {
        name: "Home",
        icon: FaHome ,
        onClick:()=> {
            const section = document.querySelector("#about");
            section?.scrollIntoView({ behavior: "smooth" });
        }
    },
    { 
        name: "About", 
        icon: FaUser, 
        onClick: () => { window.location.href = "/about"; 
        } 
    },
    { 
        name: "Blog",
        icon: FaPen,
        onClick: () => { window.location.href = "/blog";
        } 
    },
    { 
        name: "Contatti", 
        icon: RiContactsBook3Fill, 
        onClick: () => { 
            const section = document.querySelector("#contact"); section?.scrollIntoView({ behavior: "smooth" }); 
    } 
    },
]