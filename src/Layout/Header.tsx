import { HeaderContainer, NavBar } from "./style"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <HeaderContainer>
            <NavBar>
                <ul>
                    <li>
                        <NavLink 
                            to="/talents"  
                            className={({ isActive }) => isActive ? "active-link" : undefined}>
                                Talents
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/certificates" 
                            className={({ isActive }) => isActive ? "active-link" : undefined}>
                                Certificates
                        </NavLink>
                    </li>
                </ul>
            </NavBar>
        </HeaderContainer>
    )
}