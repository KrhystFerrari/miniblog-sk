import {Link} from 'react-router-dom';

//CSS
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Carola's <span>Blog</span></h1>
      <p>Este Blog foi criado com o objetivo de criar e reagir a 
        posts sobre histórias sobre Serial Killer's. 
      <p>Ana Carolina Abrahão</p>
      </p>
      <Link to='/posts/create' className='btn'>Criar post</Link>
    </div>
  )
}

export default About
