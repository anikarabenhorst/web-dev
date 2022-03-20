import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/tuiter/images/react-blue.png"
                             }
                         }) => {
    return (
        <div className="card p-2">
            <div className="row">
                <div className="col-10">
                    <div className="card-subtitle m-0" style={{color: "dimgray"}}>
                        {post.topic}</div>
                    <div className="card-text">
                        <b style={{color: "white"}}>{post.userName}</b>
                        <i className="fa-solid fa-check-circle" style={{color: "white"}}></i>
                        <span className="m-1" style={{color: "dimgray"}}>
                            • {post.time}</span>
                    </div>
                    <div className="card-text" style={{color: "white"}}>
                        <b>{post.title}</b>
                    </div>
                </div>
                <div className="col-2">
                    <img className="img-fluid rounded"
                         src={post.image}/>
                </div>
            </div>
        </div>
    );
}
export default PostSummaryItem;