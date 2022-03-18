import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                        avatarIcon: '/tuiter/images/nasa.png',
                                        userName: 'NASA',
                                        handle: 'NASA',
                                    }
                                }
) => {
    return (
        <>
            <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <div className="col-2">
                        <img className="img img-responsive rounded-circle" width="100%" height="100%"
                             src={who.avatarIcon} alt={who.userName}/>
                    </div>
                    <div className="col-7 ps-0 pe-0 position-relative zindex-bring-to-front">
                        <div className="d-flex align-items-center">
                            <b className="flex-nowrap pe-1">{who.userName}</b>
                            <i className="fa-solid fa-circle-check"/>
                        </div>
                        <p style={{margin:0}}>
                            @{who.handle}</p>
                    </div>
                    <div className="col-3 pe-2">
                        <button className="btn btn-primary rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </>

    );
}
export default WhoToFollowListItem;
