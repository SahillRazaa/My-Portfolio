import {css} from 'styled-components'

export const minilap = (props) => {
    return css`
        @media only screen and (max-width: 1100px) {
            ${props};
        }
    `
}
export const maxilap = (props) => {
    return css`
        @media only screen and (max-width: 1290px) {
            ${props};
        }
    `
}
export const maxilap1 = (props) => {
    return css`
        @media only screen and (max-width: 1380px) {
            ${props};
        }
    `
}
export const maxitab = (props) => {
    return css`
        @media only screen and (max-width: 850px) {
            ${props};
        }
    `
}
export const minitab = (props) => {
    return css`
        @media only screen and (max-width: 680px) {
            ${props};
        }
    `
}
export const maximobile = (props) => {
    return css`
        @media only screen and (max-width: 560px) {
            ${props};
        }
    `
}
export const miniimobile = (props) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${props};
        }
    `
}
export const miniminimobile = (props) => {
    return css`
        @media only screen and (max-width: 390px) {
            ${props};
        }
    `
}
export const contactlap = (props) => {
    return css`
        @media only screen and (max-width: 1000px) {
            ${props};
        }
    `
}