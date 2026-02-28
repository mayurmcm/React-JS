import { Children } from "react"

const reactelement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target: '_blank',
    },
    Children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

function createElement(type, props, ...children){
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === 'object' ? child : createTextElement(child)
            )
        }
    }
}