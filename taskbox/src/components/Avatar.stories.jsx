import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = () => <Avatar />;

export const Rounded = () => <Avatar isRounded="true" />;
