import styled from "styled-components"

export const PageSection = styled.section`
margin-top: 3rem;
`

export const GetStartedSection = styled.section`
margin-top: 3rem;
background-color: var(--clr-primary-bright-red);
`



export const Heading = styled.h1`
font-size: 2.5rem;
color: var(--clr-primary-dark-blue);
max-width: 400px;
margin-bottom: 1rem;
text-align: center;
@media only screen and (min-width: 768px){
   text-align: left;
}
`

export const HeadingWhite = styled.h1`
font-size: 2.5rem;
color: var( --clr-neutral-004);
max-width: 400px;
margin-bottom: 1rem;
text-align: center;
padding: 2rem;
@media only screen and (min-width: 768px){
   text-align: left;
   max-width: 600px;
}
`

export const PrimaryButton = styled.button`
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
`

export const InputText = styled.input`
border: none;
outline: none;
border-radius: 35px;
padding: 1rem;
min-width: 250px;
`


export const SecondaryButton = styled.button`
 color: var(--clr-primary-bright-red);
 background-color: var( --clr-neutral-004);
 border-radius: 35px;
 min-width: 200px;
 padding: 1rem;
 border: none;
 outline: none;
 font-weight: 400;
 font-size: 1.2rem;
 margin-bottom: 2rem;
 cursor: pointer;
`

export const Paragraph = styled.p`
font-size: 1.2rem;
color: var(  --clr-neutral-001);
max-width: 400px;
text-align: center;
font-weight: 400;
@media only screen and (min-width: 768px){
   text-align: left;
}
`