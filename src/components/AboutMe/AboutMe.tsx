import { IAboutMe } from "../../models";
import { downloadPdf } from "../../utils";
import { Button, List } from "..";
import "./AboutMe.css";

interface AboutProps {
  data: IAboutMe;
}

const AboutMe: React.FC<AboutProps> = ({ data }) => {
  const handleDownload = () => {
    downloadPdf(data.pdf_url);
  };

  if (!data) return null;

  return (
    <div className="container">
      <div className="about_container">
        <div className="about_card">
          <div className="card_img_container">
            <img className="card_img" src={data.img} alt={data.name} />
            <img className="card_icon" src={data.icon} alt="icon" />
          </div>
          <div className="card_content">
            <h3 className="card_title">{data.title}</h3>
            <h2 className="card_name">{data.name}</h2>
          </div>
        </div>
        <div className="about_description_container">
          <p className="about_description">
            {data.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis, neque! Quae doloremque inventore
            molestiae, est maiores fuga hic cum odio quos facere magni.
            Architecto dolore quasi, et velit necessitatibus dolores.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
            ipsum, accusantium tempora iste et asperiores, sapiente modi ab
            expedita, eligendi nam architecto. Optio vitae reiciendis hic quidem
            tenetur nisi?
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium illo voluptas cupiditate doloribus saepe dignissimos
            possimus vero soluta iure illum odio, velit consectetur, provident
            id natus doloremque incidunt in ad?
          </p>
          <Button onClick={handleDownload}>Descargar CV</Button>
        </div>
      </div>
      {data.list.map((item) => (
        <List key={item.title} title={item.title} items={item.item} />
      ))}
    </div>
  );
};

export { AboutMe };
