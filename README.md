## Welcome again to another TypeScript project! 👋

# TypeScript

## • Test the project yourself: [Click to test!!!](https://type-script-studies.vercel.app/)

### → Add tasks with their duration

![](./src/assets/gifs/Gif1.gif)

### → Select and start a task

![](./src/assets/gifs/Gif2.gif)

### → Get a check confirmation when the task is over

![](./src/assets/gifs/Gif3.gif)

## • Some code that I'm proud of
```js
interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children?: React.ReactNode
}
export default function Button ({onClick, type, children} : Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
        >
            {children}
        </button>
    )
}
```

## • Built with

- TypeScrit;
- SASS;

## • Author

- Website - [My GitHub](https://github.com/lucasbailo)
- Frontend Mentor - [@lucasbailo](https://www.frontendmentor.io/profile/lucasbailo)
- Instagram - [@lucassbailo](https://www.instagram.com/lucassbailo/)
- LinkedIn - [Lucas Bailo](https://www.linkedin.com/in/lcsbailo)