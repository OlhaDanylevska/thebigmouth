import {CircularProgress, Grid} from "@mui/material";
import ButtonsContainer from "../../components/ButtonsContainer";
import EmptyState from "../../components/EmptyState";
import UserVideo from "../../components/userHub/UserVideo";
import PageTitleComponent from "./PageTitleComponent";
import AddArtButton from "../../components/userHub/AddArtButton";
import SelectSortBy from "../../components/userHub/SelectSortBy";
import React, { useEffect, useState } from "react";
import { getAllVideosByState } from "../../api/videos";
import SubtitleComponent from "./SubtitleComponent";

const VideoHub = () => {
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAllVideosByState("approved")
      .then((videosData) => {
        setVideoData(videosData.videos);
      })
      .catch((error) => {
        console.error({ error });
      }).finally(()=> setIsLoading(false));
  }, []);

    let title = "Welcome to VideoHub"
    let subtitle = "Your Ultimate Destination for Awesome Content Experiences!"
    let titleFontSize = "50pt";
    let subtitleFontSize = "26pt";

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item lg={12} sx={{ mt: { xs: "2rem", lg: "2rem" }, mb: "1rem" }}>
                <PageTitleComponent title={title} titleFontSize={titleFontSize} />
                <SubtitleComponent subtitle={subtitle} subtitleFontSize={subtitleFontSize} />
            </Grid>
            <Grid item>
                <ButtonsContainer>
                    <AddArtButton />
                </ButtonsContainer>
            </Grid>
            <Grid
                item
                sx={{ width: "88%" }}
                container
                justifyContent="flex-end"
                alignItems="center"
            >
                <SelectSortBy setVideoData={setVideoData} videoData={videoData} />
            </Grid>

            <Grid item sx={{ width: "90%", marginTop: "2rem", marginBottom: "2rem" }}>
                <Grid
                    container
                    justifyContent="center"
                    sx={{ marginBottom: { lg: "4rem", sm: 0 } }}
                >
                    {isLoading && <CircularProgress/>}
                    {!isLoading && videoData === null && <EmptyState>There is no any videos</EmptyState>}
                    {!isLoading && videoData && videoData.map((video) => {
                        let withVideoInfo = true;
                        let maxWidth = "800px";
                        return (
                            <Grid
                                item
                                lg={4}
                                md={6}
                                xs={12}
                                key={video.id}
                                sx={{
                                    padding: { lg: "1rem", md: "1rem", sm: 0 },
                                    paddingBottom: { sm: "2rem", xs: "1rem" },
                                }}
                            >
                                <UserVideo
                                    video={video}
                                    maxWidth={maxWidth}
                                    withVideoInfo={withVideoInfo}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default VideoHub;