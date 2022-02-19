import styles from './Image.module.css'

function Image(props:imageProps) {
    return (
        <img className={styles.image} src={props.src}></img>
    )
}

type imageProps = {
    src: string,
    alt: string
    key: string
}

export default Image;