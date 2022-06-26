import styles from './Projects.module.css'
import Carousel from '../Carousel'

export default function Projects () {
  return (
    <section id='projects' className={styles.projects}>
      <h2 className='mb-4 text-center'>Projects</h2>
      <Carousel />
    </section>
  )
}
