import { Meta } from "@storybook/react";
import BBSCard from "./BBSCard";

const meta: Meta<typeof BBSCard> = {
  component: BBSCard,
  title: "features/top/BBSCard",
};

export default meta;

export const Default = BBSCard.bind({});
