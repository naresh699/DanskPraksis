export default function VideoReference({ video }) {
    if (!video) return null;

    return (
        <div className="video-reference-card glass-card">
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-thumbnail-link">
                <div className="thumbnail-wrapper">
                    <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                    <div className="play-overlay">
                        <span className="play-icon">▶</span>
                    </div>
                </div>
            </a>
            <div className="video-info">
                <h4 className="video-title">
                    <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
                </h4>
                <p className="video-channel">
                    By <a href={video.channelUrl} target="_blank" rel="noopener noreferrer">{video.channel}</a>
                </p>
                <p className="video-description">{video.description}</p>
            </div>
        </div>
    );
}
