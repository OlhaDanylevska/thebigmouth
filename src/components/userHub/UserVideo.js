import { Card } from "@mui/material";
import React from 'react';
import UserVideoInfo from "./UserVideoInfo";
import VideoBoxWithDecor from "./VideoBoxWithDecor";



const UserVideo = ({ video, maxWidth, withVideoInfo }) => {
    const { videoUrl, videoImg, ...videoInfo } = video;
    console.log(videoInfo)
    return (
        <Card variant="outlined" sx={{ width: "100%", height: "100%", backgroundColor: "black", p: 2, maxWidth }}>
            <VideoBoxWithDecor videoUrl={videoUrl} videoImg={videoImg} maxWidth={maxWidth} />
            {withVideoInfo && <UserVideoInfo videoInfo={videoInfo} />}
        </Card>
    )
}

export default UserVideo;