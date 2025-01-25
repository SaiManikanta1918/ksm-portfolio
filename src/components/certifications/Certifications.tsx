import { Row } from "react-bootstrap";
import Title from "../core/title";
import data from "@/config/data.json";
import CertificationItem from "./CertificationItem";

export default function Certifications() {
  const certificationItems = data.certifications.certificationItems;
  return (
    <div className="containerMain">
      <Title title="Certifications" />
      <Row>
        {certificationItems.map((item) => (
          <CertificationItem
            key={item.title}
            title={item.title}
            imageSrc={"/assets/certifications/" + item.imageName.trim()}
            imageAlt={item.imageAlt}
            link={item.link}
          />
        ))}{" "}
      </Row>
    </div>
  );
}
