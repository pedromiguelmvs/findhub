import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useData } from '../providers/UsernameProvider';

import Card from '../components/Card';

import dashboardStyle from '../styles/dashboard.module.css';

const Dashboard = () => {
    const history = useHistory();
    const { data, repository } = useData();

    useEffect(() => {
        if (!data) {
            history.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toIndex() {
        history.push('/');
    }

    return (
        <>
            <div className={dashboardStyle.container}>
                <div className={dashboardStyle.findContainer}>
                    <div className={dashboardStyle.profile}>
                        <img
                            className={dashboardStyle.profileImage}
                            src={data.avatar_url}
                            alt="profile"
                        />
                        <p>Olá, 
                            <span className={dashboardStyle.strong}> {data.name}</span>
                        </p>
                        <p className={dashboardStyle.separator}>~</p>
                        <p className={dashboardStyle.bio}>
                            "{data.bio}"
                        </p>
                        <button
                            type="button"
                            className={dashboardStyle.quitButton}
                        >
                            <img
                                onClick={toIndex}
                                src="https://pics.freeicons.io/uploads/icons/png/18610531421560147113-512.png"
                                alt="exit"
                            />
                        </button>
                    </div>
                    <div className={dashboardStyle.content}>
                        <div className={dashboardStyle.card}>
                            {/* green card */}
                            <Card
                                title="Destemido!"
                                content={`Você tem ${data.public_repos} repositórios públicos!`}
                                src="https://i.imgur.com/Vso1eIt.png"
                                color="52B788"
                            />
                            {/* purple card */}
                            <Card
                                title="Famoso!"
                                content={`Você tem ${data.followers} seguidores!`}
                                src="https://i.imgur.com/w9oEmSA.png"
                                color="8338EC"
                            />
                        </div>

                        <div className={dashboardStyle.repositories}>
                            {repository.map((repo, index) => {
                                return <Card
                                    key={index}
                                    title={repo.name}
                                    content={repo.description}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;