import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuit } from '../../../actions/tuits-actions';
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="col-1 ">
                        <img className="img img-responsive rounded-circle" width="100%"
                             src={tuit['avatar-image']} alt={tuit.postedBy.username}/>
                    </div>
                    <div className="col-11">
                        <div>
                            <b style={{color: "white"}}>{tuit.postedBy.username}</b>
                            {tuit.verified && <i className="fa-solid fa-check-circle" style={{color: "white"}}></i>}
                            <span className="ps-1" style={{color: "gray"}}>@{tuit.handle}</span>
                            <i onClick={() => deleteTuit(dispatch, tuit)} className="fas fa-remove fa-pull-right"></i>
                        </div>
                        <div style={{color: "white"}}>
                            <p>{tuit.tuit}</p>
                        </div>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img alt="" src={tuit.attachments.image}
                                 className="mt-2 rounded"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 rounded"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TuitListItem;