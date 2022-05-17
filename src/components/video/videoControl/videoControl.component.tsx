import React from 'react';
import classnames from 'classnames';
import VideoProgress, { IVideoProgressProps } from './videoProgress.component';
import VideoControlBottom from './videoControlBottom.component';

export interface IVideoComponentProps extends IVideoProgressProps {
  hovers: boolean;
  startPlay: boolean;
  onPlayAndPause:()=>void;
}

const VideoControl = (props: IVideoComponentProps) => {
  const { hovers, startPlay,onPlayAndPause,progress,currentTime } = props;

  return (
    <div
      className={classnames(
        'antd-waffle-video-control',
        hovers ? 'antd-waffle-video-control-hover' : ' '
      )}
    >
      <VideoProgress 
        progress={progress}
        currentTime={currentTime}
      />
      <VideoControlBottom 
        startPlay={startPlay}
        onPlayAndPause={onPlayAndPause}
      />
    </div>
  );
};

export default VideoControl;