import { formatDistance } from "date-fns";

const TimeAgo = (oldDate) => {
  const toDay = new Date();
  const convertCreated_ad = new Date(oldDate);
  const options = {
    addSuffix: true,
  };
  const compareDate = formatDistance(convertCreated_ad, toDay, options);

  return compareDate;
};

export default TimeAgo;
