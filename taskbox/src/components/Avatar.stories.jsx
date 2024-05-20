import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  // argTypes: {
  //   variant: {
  //     options: ["default", "rounded"],
  //     control: { type: "radio" },
  //   },
  // },
};

export const Default = {
  args: {
    name: "Thomas Mustermann",
    src: "https://placehold.co/200",
    isRounded: false,
  },
};

export const DefaultLongName = {
  args: {
    ...Default.args,
    name: "Gabriel Filipe Thomas Santo Grande",
  },
};

export const Rounded = {
  args: {
    ...Default.args,
    isRounded: true,
  },
};
