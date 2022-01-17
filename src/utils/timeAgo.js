import { formatDistanceToNow } from "date-fns";

const timeAgo = (oldDate) => {
  const toDay = new Date();
  const convertCreated_ad = new Date(oldDate);
  const options = {
    addSuffix: true,
  };
  const compareDate = formatDistanceToNow(convertCreated_ad, toDay, options);

  return compareDate;
};

export default timeAgo;
