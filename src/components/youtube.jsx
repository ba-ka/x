import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      isPlaying: false,
      videoData: {},
    };
    this.onReady = this.onReady.bind(this);
    this.controlPlayer = this.controlPlayer.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }

  controlPlayer = () => {
    console.log(player);
    const player = this.state.player;
    console.log(player);
    if (player.getPlayerState() == 1) {
      player.pauseVideo();
      this.setState({
        ...this.state,
        isPlaying: false,
      });
    } else {
      player.playVideo();
      this.setState({
        ...this.state,
        isPlaying: true,
      });
    }
  };

  onStateChange = (event) => {
    const player = event.target;

    console.log(player);
    console.log(this.props.playlist);
    let temp = false;

    if (player.getPlayerState() == 1) {
      temp = true;
    }

    this.setState({
      ...this.state,
      isPlaying: temp,
      videoData: player.getVideoData(),
    });
  };

  onReady = (event) => {
    const player = event.target;

    console.log(player);
    console.log(this.props.playlist);

    player.loadPlaylist({
      list: this.props.playlist,
    });

    this.setState({
      ...this.state,
      player: player,
    });
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        rel: 0,
      },
    };

    return (
      <div className="video-container">
        <YouTube
          opts={opts}
          onStateChange={this.onStateChange}
          onReady={this.onReady}
        />
        {/* <ReactPlayer
          src="https://www.youtube.com/playlist?list=PL6UeSFbYxOqJs1o2BQ8RTmgagfkxttMDb"
          controls={false}
          style={{
            width: "100%",
            height: "100%",
            "--controls": "none",
          }}
        ></ReactPlayer>*/}
        <div className={`content ${this.state.isPlaying && "show"}`}>
          <span className="button-default" onClick={this.controlPlayer}>
            {this.state.isPlaying ? "[ pause ]" : "[ play ]"}
          </span>
          <div className={`note ${this.state.isPlaying && "hidden"}`}>
            click [ play ] to start the video :) in top left
          </div>
          <div className="logo">
            <a
              target="_blank"
              rel="noreferrer"
              className={`${!this.state.isPlaying && "transparent"}`}
              href={`https://youtube.com/watch?v=${this.state.videoData.video_id}`}
            >
              <h3>
                [ {this.state.videoData.title} by {this.state.videoData.author}{" "}
                ]
              </h3>
            </a>
            <h2>[ ba-ka ] x [ &#12400;-&#12363; ]</h2>
            <ul>
              <li>
                <a href="https://ba-ka.org/discord">discord</a>
              </li>
              <li>
                <a href="https://ba-ka.org/steam">steam</a>
              </li>
              <li>
                <a href="https://ba-ka.org/roblox">roblox</a>
              </li>
              <li>
                <a href="https://ba-ka.org/github">github</a>
              </li>
              <li>
                <a href="https://t.ba-ka.org/">tanoshii</a>
              </li>
              <li>
                <a href="https://hako.work/">hakowork</a>
              </li>
              <li>
                <a href="https://ba-ka.org/ws">weeaboos squad</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
