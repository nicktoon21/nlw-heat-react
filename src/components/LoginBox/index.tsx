import { useEffect, useState } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type AuthResponse = {
  toke: string;
  user: {
    id: string;
  }
}

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c20bc82cbdd752561424`;

  async function signIn(githubCode: string) {
    const response = await api.post('authenticate', {
      code: githubCode,
    })
  }
  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }

  }, []);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </div>
  )
}