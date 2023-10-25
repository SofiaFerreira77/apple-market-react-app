import styles from './Banner.module.css'

const Banner = props => {
    const {title, subtitle, link, linkName} = props;

    return (
        <div className={styles.Banner}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a href={link}>{linkName}</a>
        </div>
    )
}

export default Banner