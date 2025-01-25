import styles from "@/styles/skills.module.css";
import Title from "../core/title";
import data from "@/config/data.json";
import { getDynamicIcon } from "../core/dynamicIconHelper";
import ToolItem from "./ToolItem";

export default function Tools() {
  const interests = data.tools;
  return (
    <div className={styles.skillsContainer}>
      <Title title="Tools" />
      <div className={styles.skillsHolder}>
        {interests &&
          interests.map((item) => {
            const { icon, title } = item;
            return (
              <ToolItem
                key={title}
                icon={getDynamicIcon(icon.trim())}
                title={title}
              />
            );
          })}
      </div>
    </div>
  );
}
