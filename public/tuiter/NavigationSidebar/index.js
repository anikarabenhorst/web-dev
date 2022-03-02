const NavigationSidebar = () => {
    return (`
         <div class="list-group">
            <a class="list-group-item" href="/">
               <i class="fa-brands fa-twitter"></i></a>
            <a href="home.html" class="d-flex list-group-item list-group-item-action">
               <i class="fa-solid fa-house-chimney"></i>
               <span class="d-none d-xl-block ms-1"> Home</span>
            </a>
            <a href="explore.html" class="d-flex list-group-item list-group-item-action active" aria-current="true">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-block ms-1"> Explore</span>
            </a>
            <a href="notifications.html" class="d-flex list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-block ms-1"> Notifications</span>
            
            </a>
            <a href="messages.html" class="d-flex list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-block ms-1"> Messages</span>
            </a>
            <a href="bookmarks.html" class="d-flex list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-block ms-1"> Bookmarks</span>
            </a>
            <a href="lists.html" class="d-flex list-group-item list-group-item-action">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-block ms-1"> Lists</span>
            </a>
            <a href="profile.html.html" class="d-flex list-group-item list-group-item-action">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-block ms-1"> Profile</span>
            </a>
            <a href="more.html" class="d-flex list-group-item list-group-item-action">
                <span class="fa-stack">
                  <i class="fa-solid fa-circle fa-stack-1x"></i>
                  <i class="fa-solid fa-ellipsis fa-inverse fa-stack-1x"></i>
                </span>
                <span class="d-none d-xl-block ms-1"> More</span>
            </a>
            </div>
            <div class="d-grid mt-2">
               <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                  Tweet</a>
         </div>
    `);
}
export default NavigationSidebar;
