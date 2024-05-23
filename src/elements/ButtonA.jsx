import styles from './ButtonA.module.css'


function ButtonA({ text, link }) {
     const handleClick = () => {
        window.open(link, '_blank');
    };
    return (
        <div>
            <button className={styles.btn} onClick={handleClick}>{text}</button>

        </div>
    )
}

export default ButtonA