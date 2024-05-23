import styles from './Card.module.css'
import ButtonA from '../elements/ButtonA'




function Card({ title, description, img, site }) {
    
    return (
        <div className={styles.card} >
            <a href={site} target='blank'>
                <img src={img} alt='ERROR' /></a>
           
                <h3>{title}</h3>
            
                <p>{description}</p>
          

            <ButtonA
            site='https://projetolp1dnc.netlify.app' text='Ver'></ButtonA>


        </div>

    )
}

export default Card




