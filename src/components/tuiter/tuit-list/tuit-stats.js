import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="me-2 far fa-comment"></i>
                {tuit.stats.comments}
            </div>
            <div className="col">
                <i className="me-2 fas fa-retweet"></i>
                {tuit.stats.retuits}
            </div>
            <div className="col">
                <span onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    liked: !tuit.liked,
                    stats: {
                        ...tuit.stats,
                        likes: tuit.liked ? tuit.stats.likes-- : tuit.stats.likes ++
                    }
                    // "stats.likes": tuit.liked ? tuit.stats.likes-- : tuit.stats.likes ++
                })}>
                    Likes: {tuit.stats && tuit.stats.likes}
                    {
                    tuit.liked &&
                    <i className="far fa-thumbs-up ms-2" style={{color: 'red'}}></i>
                    }
                    {
                        !tuit.liked &&
                        <i className="far fa-thumbs-up ms-2"></i>
                    }
                </span>
            </div>
            <div className="col">
                <span onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    disliked: !tuit.disliked,
                    stats: {
                        ...tuit.stats,
                        dislikes: tuit.disliked ? tuit.stats.dislikes-- : tuit.stats.dislikes++
                    }
                    // "stats.dislikes": tuit.disliked ? tuit.stats.dislikes-- : tuit.stats.dislikes++
                })}>
                    Dislikes: {tuit.stats && tuit.stats.dislikes}
                    {
                        tuit.disliked &&
                        <i className="far fa-thumbs-down ms-2" style={{color: 'red'}}></i>
                    }
                    {
                        !tuit.disliked &&
                        <i className="far fa-thumbs-down ms-2"></i>
                    }
                </span>
            </div>
            <div className="col">
                <i className="me-2 fas fa-external-link-alt"/>
            </div>
        </div>
    );
}
export default TuitStats;