import styled from "styled-components";

export const Nav = styled.header`
display:flex;
position: sticky;
top: 0;
z-index: 1000;
justify-content: space-between;
align-items: center;
padding: 1.5rem;
`

export const NavList = styled.ul`
display: flex;
gap: 1rem;
align-items: center;
max-width: 100%;
@media only screen and (max-width: 768px){
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow:
        0 10px 27px rgba(0, 0, 0, 0.05);
    &.active{
        left: 0;
    }
}
`

export const ListItem = styled.li`
margin-left:2rem;
@media only screen and (max-width: 768px){
    margin: 2.5rem 0;
}
`;

export const Image = styled.img`
font-size: 20px;
`

export const NavLink = styled.a`
color: var(--clr-primary-dark-blue);
transition: .3s ease-in;
font-size: 1.2rem;
font-weight: 400;
:hover{
    color: var(--clr-neutral-001);
}
`

export const Hamburger = styled.div`
display: none;
@media only screen and (max-width: 768px){
    display: block;
    justify-self: center;
    top: -5px;
    position: relative;
    cursor: pointer;
    &.active .bar:nth-child(2) {
        opacity: 0;
    }

    &.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    &.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

}
`
export const Bar = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
`

export const NavButton = styled.button`
 color: white;
 background-color: var( --clr-primary-bright-red);
 border-radius: 35px;
 min-width: 200px;
 padding: 1rem;
 border: none;
 outline: none;
 transition: .3s ease;
 font-weight: 400;
 font-size: 1.2rem;
 &:hover{
    cursor: pointer;
    background-color: var(--clr-primary-light-red);
 }
 @media only screen and (max-width: 768px){
    display: none;
 }
`