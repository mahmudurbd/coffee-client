import { notification } from "antd";

export default function sendNotification(
  type,
  message,
  description,
  placement,
  pauseOnHover
) {
  return notification[type]({
    message,
    description,
    placement,
    showProgress: true,
    pauseOnHover,
  });
}
