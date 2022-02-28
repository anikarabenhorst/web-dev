const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <p style="margin:0; color: dimgray;">
                    ${post.topic}</p>
                    <p style="display: inline; font-weight: bold;">
                    ${post.userName}</p>
                    <i style="display: inline;" class="fa-solid fa-check-circle"></i>
                    <p style="display: inline; margin:0; color: dimgray;">
                    • ${post.time}</p>
                    <p style="font-weight: bold; margin:0;">
                    ${post.title}</p>
                </div>
                <div class="col-2">
                    <img class="img img-responsive full-width" style="width: 100%; border-radius: 12px;"
                         src="${post.image}">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;