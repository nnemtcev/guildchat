import { useQuery } from "react-query";
import { dmKey } from "utils/querykeys";

export default function useGetCurrentDM(channelId) {
  const { data: dms } = useQuery(dmKey);
  return dms?.find((channel) => channel.id === channelId);
}
