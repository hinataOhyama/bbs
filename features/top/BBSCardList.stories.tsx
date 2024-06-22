import React from "react";
import BBSCard from "./BBSCard";
import BBSCardList from "./BBSCardList";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BBSCardList> = {
  component: BBSCardList,
  subcomponents: { BBSCard },
  title: "features/top/BBSCardList",
};

export default meta;

type BBSCardListStory = StoryObj<typeof BBSCardList>;

export const Empty: BBSCardListStory = {};

export const OneItem: BBSCardListStory = {
  render: () => (
    <BBSCardList>
      <BBSCard />
    </BBSCardList>
  ),
};

export const MultipleItem: BBSCardListStory = {
  render: () => (
    <BBSCardList>
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </BBSCardList>
  ),
};
