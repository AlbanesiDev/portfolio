import { IVideoPreview } from "../../models/data.interface";
import "./VideoPreview.css";

interface VideoPreviewProps {
	data: IVideoPreview;
	onClick: () => void;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ data, onClick }) => {
	return (
		<div className="video" onClick={onClick}>
			<img src={data.cover} alt={data.alt} />
			{/* <video src={data.src}></video> */}
		</div>
	);
};

export { VideoPreview };
