import {useState, useEffect} from 'react';

//CSS
import styles from './Register.module.css';


const Register = () => {
  return (
    <div className='register-block'>
      <h1>Cadastre-se para postar</h1>
      <p>Crie um usúario e compartilhe suas histórias!</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Usúario' />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name='email' required placeholder='email@email.com' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Senha' />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Senha' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
