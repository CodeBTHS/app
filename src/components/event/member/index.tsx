import { Box } from "@chakra-ui/react";
import LinkRedeemFail from "@components/event/link-redeem-fail";
import LinkRedeemSuccess from "@components/event/link-redeem-success";
import { useMutation } from "@hooks/useMutation";
import { useQuery } from "@hooks/useQuery";
import { getAxios, useAxios } from "@lib/axios";
import { withOsisRedirect } from "@lib/util/osisRedirect";
import {
  EventLink,
  EventLinkRedeem,
  EventLinkRedeemStatus,
  LinkApplyInstructions,
  Role,
} from "@typings";
import { Session } from "next-auth";
import React, { useContext, useEffect, useState } from "react";

interface LinkPageProps {
  session: Session;
  code: string;
  link: EventLink & { metadata: LinkApplyInstructions[] };
}

export const MemberLinkRedeem: React.FC<LinkPageProps> = ({
  session,
  link,
  code,
}) => {
  const { loading } = useAxios();
  const [responseData, setResponseData] = useState<EventLinkRedeem>(null);
  const [error, setError] = useState("");
  const redeem = useMutation<EventLinkRedeem, { code: string }>(
    "/links/redeem",
    "post",
    "/users/metadata"
  );

  useEffect(() => {
    if (session.user.role === Role.EXEC) return;
    if (loading) return;

    redeem({ code }, (error) => setError(error.description)).then((data) => {
      if (data?.status === EventLinkRedeemStatus.FAILED)
        return setError(data.statusDescription);
      return setResponseData(data);
    });
  }, [redeem, loading]);

  return (
    <Box>
      {error && <LinkRedeemFail error={error} />}
      {responseData && <LinkRedeemSuccess link={link} />}
    </Box>
  );
};
