import { IVideoPreview } from "../../models/data.interface";
import "./VideoPreview.css";

interface ViderPreviewProps {
	data: IVideoPreview;
}

const VideoPreview: React.FC<ViderPreviewProps> = ({ data }) => {
	return (
		<>
			<div className="video">
				<img src={data.cover} alt={data.alt} />
				{/* <video src={data.src}></video> */}
			</div>
		</>
	);
};

export { VideoPreview };
