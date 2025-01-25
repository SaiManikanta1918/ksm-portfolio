import styles from "@/styles/skill_item.module.css";
import { DynamicIconType } from "../core/dynamicIconHelper";

interface ToolItemProps {
  icon: DynamicIconType;
  title: string;
}
export default function ToolItem({ icon, title }: ToolItemProps) {
  const Icon = icon;
  return (
    <span className={styles.skillItem}>
      <Icon className={styles.skillItemIcon} />
      {title}
    </span>
  );
}
