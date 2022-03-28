import React from "react";

const TuitListItem = ({
    key = 456,
    tuit =   {
        "_id": 456,
        topic: "Web Development",
        postedBy: {
            username: "NodeJS"
        },
        liked: true,
        verified: true,
        handle: "NodeJS",
        title: "",
        tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        attachments: {
            image: "/tuiter/images/spacex.jpeg",
            video: "qPgaQf4pRrg"
        },
        time: "last month",
        "logo-image": "/tuiter/images/nodejs.png",
        "avatar-image": "/tuiter/images/nodejs.png",
        tuits: "120K",
        stats: {
            comments: 123,
            retuits: 234,
            likes: 345
        }
    }

}) => {
    return (
        <>
            <li key={key} className="list-group-item">
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
                                {/*{*/}
                                {/*    tuit.liked && <i className="fas fa-heart me-2"*/}
                                {/*                      style={{color: tweet.liked ? "red" : "white"}}></i>*/}
                                {/*}*/}
                                {/*{*/}
                                {/*    !tuit.liked && <i className="far fa-heart me-2"></i>*/}
                                {/*}*/}
                                <i className="far fa-heart me-2"></i>
                                {tuit.stats.likes}
                            </div>
                            <div className="col">
                                <i className="me-2 fas fa-external-link-alt"/>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        </>
    );
}

export default TuitListItem;