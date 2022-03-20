import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">Who to follow</li>
            {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;