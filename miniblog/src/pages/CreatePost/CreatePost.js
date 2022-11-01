import styles from './CreatePost.module.css'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuthValue} from '../../contexts/AuthContext';


const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h1>Criar Post</h1>
      <p>Escreva sua história!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
           type="text" 
           name="title" 
           required
           placeholder='Título'
           onChange={(e) => setTitle(e.target.value)}
           value={title}/>
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
           type="text" 
           name="image" 
           required
           placeholder='Insira uma imagem que represente sua história'
           onChange={(e) => setImage(e.target.value)}
           value={image}/>
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
           name="body" 
           required 
           placeholder='Escreva sua história' 
           onChange={(e) => setBody(e.target.value)} 
           value={body}></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
           type="text" 
           name="tags" 
           required
           placeholder='Insira as tags separadas por vírgula'
           onChange={(e) => setTags(e.target.value)}
           value={tags}/>
        </label>
        <button className="btn">Criar Post</button>
        {/*{!loading && <button className="btn">Criar Post</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost
