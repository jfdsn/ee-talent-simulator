import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 5px;
    z-index: 10;
`;

export const Logo = styled.img`
    width: 140px;
    height: auto;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

    ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            margin: 0 20px;

            a {
                color: white;
                text-decoration: none;
                font-size: 18px;

                &:hover {
                    color: #ffcc00;
                }

                &.active-link {
                    color: #ffcc00;
                    border-bottom: 2px solid #ffcc00;
                    font-weight: bold;
                }
            }
        }
    }
`;