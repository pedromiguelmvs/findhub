import { useEffect, useState } from 'react';
import cardStyle from '../styles/Card.module.css';

const Card = (props) => {
    const [showImg, setShowImg] = useState(false);

    useEffect(() => {
        if (!props.src) {
            setShowImg(false);
        } else {
            setShowImg(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={cardStyle.container} style={{ 'borderBottom': `3px solid #${props.color}` }}>
            {(showImg) ? (
                <img
                    className={cardStyle.img}
                    src={props.src}
                    alt="repositories"
                />
            ) : null}
            <div className={cardStyle.content}>
                <h5 className={cardStyle.cardTitle}>{props.title}</h5>
                <p className={cardStyle.cardContent}>{props.content}</p>
            </div>
        </div>
    );
}

export default Card;