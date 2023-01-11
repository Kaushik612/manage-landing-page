import styled from "styled-components";

export const FooterSection = styled.section`
background-color: var(--clr-neutral-002);
`

export const FooterLink = styled.li`
 margin-bottom: 1rem;
 cursor: pointer;
 transition: .3s ease;
 &:hover{
    color: var(--clr-primary-bright-red);
 }
`