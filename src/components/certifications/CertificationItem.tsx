import { avatarBlur } from "@/constants/constants";
import styles from "@/styles/certification_item.module.css";
import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { FiExternalLink, FiLink } from "react-icons/fi";
import { MdLink } from "react-icons/md";

interface CertificationItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
}
export default function CertificationItem({
  title,
  imageSrc,
  imageAlt,
  link,
}: CertificationItemProps) {
  return (
    <Col lg={3} md={6} sm={12}>
      <Link
        href={link}
        target="_blank"
        className={styles.certificationItemLink}
      >
        <div className={styles.certificationItem}>
          <div className={styles.certificationItemImageContainer}>
            <div className={styles.certificationItemImage}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={100}
                height={100}
                placeholder="blur"
                priority={false}
                blurDataURL={avatarBlur}
                sizes="50vw"
                style={{
                  width: "100%",
                  height: "400px",
                }}
              />
              <ul>
                <MdLink />
              </ul>
            </div>
          </div>
          <div>
            <h5 className={styles.certificationItemHeading}>{title}</h5>
          </div>
        </div>
      </Link>
    </Col>
  );
}
