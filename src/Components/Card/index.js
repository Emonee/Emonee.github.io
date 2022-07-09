import styles from './Card.module.css'
import BootstrapCard from 'react-bootstrap/Card'
import Nowmodal from '../Nowmodal'

export default function Card (props) {
  const { title, text, modal, image, url } = props.data
  const errorOnImg = (event) => event.target.remove()
  return (
    <BootstrapCard className={styles.card}>
      <BootstrapCard.Img onError={errorOnImg} variant='top' src={image} className='rounded' />
      <BootstrapCard.Body className={styles.cardBody}>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <hr />
        <BootstrapCard.Text>
          {text}
          {url &&
            <a 
              className='btn button btn button-primary d-block width-max-content mt-4 mx-auto'
              href={url.link}
              target="_blank"
              rel="noreferrer"
            > {url.text} 
          </a>}
        </BootstrapCard.Text>
        {modal && <Nowmodal title={modal.title} text={modal.text} textButton={modal.buttonText} />}
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}
