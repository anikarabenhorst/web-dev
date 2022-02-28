import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="form px-1 me-2" style="width:100%;">
                <input type="text" class="form-control form-input rounded-pill"
                    style="font-family:Arial, FontAwesome" placeholder="&#xf002;   Search Twitter">
            </div>
            <i class="fas fa-cog fa-2x" style="color: rgb(29, 161, 242);"></i>
        </div>           
        
        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
              <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="img-container position-relative">
            <img style="width: 100%;" src="../images/spacex.jpeg">
            <div class="position-absolute bottom-0 start-0 ps-2">
                <p style="margin:0; font-size: 35px; font-weight: bold; color: white;">
                    SpaceX's Starship</p>
            </div>
        </div>
        
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
