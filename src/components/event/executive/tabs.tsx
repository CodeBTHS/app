import { UseDisclosureReturn } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { EventTabs, useEvent } from "./context";
import { EventsTab } from "./tasks-tab";
import { LinksTab } from "./links-tab";

const Tabs: React.FC<{
  linkCreate: UseDisclosureReturn;
  eventCreate: UseDisclosureReturn;
}> = ({ linkCreate, eventCreate }) => {
  const { selectedTab, setSelectedTab } = useEvent();

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.altKey && event.key === "l") {
        event.preventDefault();
        return setSelectedTab(EventTabs.LINKS);
      } else if (event.altKey && event.key === "t")
        return setSelectedTab(EventTabs.TASKS);
    });
  }, []);

  switch (selectedTab) {
    case EventTabs.LINKS:
      return <LinksTab linkCreate={linkCreate} />;
    case EventTabs.TASKS:
      return <EventsTab eventCreate={eventCreate} />;
  }
};

export default Tabs;
