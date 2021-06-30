import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useData } from '../providers/UsernameProvider';

import homeStyle from '../styles/home.module.css';

const Home = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const { setData, setRepository } = useData();

    async function onSubmit(e) {
        e.preventDefault();

        if (!username.trim()) {
            return alert('Preencha um nome de usuário.');
        }

        const userData = await fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json());

        const userRepositoryData = await fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json());

        setData(userData);
        setRepository(userRepositoryData);

        history.push('/dashboard');
    }

    return (
        <div className={homeStyle.formContainer}>
            <form onSubmit={onSubmit} className={homeStyle.form}>
                <input
                    type="text"
                    placeholder="Digite seu usuário no github: "
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <button
                    className={homeStyle.button}
                    type="submit"
                >Enviar</button>
            </form>
        </div>
    );
}

export default Home;