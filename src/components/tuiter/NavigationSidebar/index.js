import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fa-brands fa-twitter"></i></a>
                <a href="home.html"
                   className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa-solid fa-house-chimney"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Home</span>
                </a>
                <a href="explore.html" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa-solid fa-hashtag"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Explore</span>
                </a>
                <a href="notifications.html"
                   className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bell"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Notifications</span>

                </a>
                <a href="messages.html" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Messages</span>
                </a>
                <a href="bookmarks.html" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa-solid fa-bookmark"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Bookmarks</span>
                </a>
                <a href="lists.html" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa-solid fa-list"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Lists</span>
                </a>
                <a href="profile.html.html" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa-solid fa-user"></i>
                    <span className="d-none d-xl-inline-block ms-1"> Profile</span>
                </a>
                <a href="more.html" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <span className="fa-stack">
                  <i className="fa-solid fa-circle fa-stack-1x"></i>
                  <i className="fa-solid fa-ellipsis fa-inverse fa-stack-1x"></i>
                </span>
                    <span className="d-none d-xl-inline-block ms-1"> More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
