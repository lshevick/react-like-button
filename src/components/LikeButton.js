import { useState } from "react";

const LikeButton = () => {
    const [likes, countLikes] = useState(0);
    const [singular, setSingular] = useState('Likes');
    const addLike = () => {
        countLikes(likes => likes + 1);
        if (likes === 0) {
            return setSingular('Like')
        }
        return setSingular('Likes');
    }


    return (
        <button onClick={addLike} type='button' aria-pressed='false'><span>{likes}</span> <span>{singular}</span></button>
    );
}

export default LikeButton;