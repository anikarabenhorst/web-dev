import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <PostSummaryList/>
            <WhoToFollowList/>
        </>
    )
};

export default Tuiter;
