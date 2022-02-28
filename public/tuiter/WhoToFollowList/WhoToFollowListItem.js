const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
           <div class="d-flex justify-content-between">
            <div class="col-2">
              <img class="img img-responsive rounded-circle" style="height: 100%; width:100%;"
                  src="${who.avatarIcon}">
            </div>
            <div class="col-7 ps-0 pe-0 position-relative">
              <p style="white-space: nowrap; font-weight: bold; z-index: 2;">
              ${who.userName} <span><i class="fa-solid fa-check-circle"></i></span></p>
              <p style="margin:0;">
              @${who.handle}</p>
            </div>
            <div class="col-3 pe-2">
              <button style="border-radius: 24px;" class="btn btn-primary">
              Follow
              </button>
            </div>
           </div>
        </li>
    `);
}
export default WhoToFollowListItem;
