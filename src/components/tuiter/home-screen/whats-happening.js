import React, {useState} from "react";
import {createTuit} from '../../../actions/tuits-actions';
import {useDispatch} from "react-redux";
import './whats-happening.css';

const WhatsHappening = () => {
    const [newTuit, setNewTuit] = useState({tuit: ""});
    const dispatch = useDispatch();

    return (
        <>
            <div className="row pb-2">
                <div className="col-2">
                    <img className="img img-responsive rounded-circle ms-2" width="48px" height="48px"
                         src='/tuiter/images/spacex.jpeg' alt=""/>
                </div>
                <div className="col-10">
                    <textarea
                        placeholder="What's happening"
                        value={newTuit.tuit}
                        onChange={(e) =>
                            setNewTuit({...newTuit,
                                tuit: e.target.value})}>
                    </textarea>
                    <hr className="m-2"/>
                    <div>
                        <i className="mx-2 far fa-image wd-blue"></i>
                        <i className="mx-2 fas fa-chart-line wd-blue"></i>
                        <i className="mx-2 far fa-smile wd-blue"></i>
                        <i className="mx-2 far fa-calendar wd-blue"></i>
                        <button
                            onClick={() => createTuit(dispatch, newTuit)}
                            className="btn btn-primary float-end rounded-pill">
                            Tweet
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default WhatsHappening;