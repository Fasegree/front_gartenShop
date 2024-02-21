import React, { useState } from 'react';
import s from './ShowDescription.module.css';

const ShowDescription = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const truncatedDescription = description?.slice(0, 100);
    const hasMore = description?.length > 100;

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className={s.showDescription}>
            <p className={s.titleDescr}>Description</p>

            <p className={s.txtDescr}>
                {showFullDescription ? description : truncatedDescription}
                {hasMore && !showFullDescription && '...'}
            </p>

            {hasMore && (
                <a className={s.readMoreLink} onClick={toggleDescription}>
                    {showFullDescription ? 'Read less' : 'Read more'}
                </a>
            )}
        </div>
    );
};

export default ShowDescription;