import React from "react";
import { Badge, BadgeText, BadgeIcon, GlobeIcon } from "@gluestack-ui/themed";

const BadgeBasic = ({ text = "NEW FEATURE", colorMode, ...props }: any) => {
  let badgeIconAndTextSize = "";
  switch (props.size) {
    case "sm":
      badgeIconAndTextSize = "2xs";
      break;
    case "md":
      badgeIconAndTextSize = "xs";
      break;
    case "lg":
      badgeIconAndTextSize = "sm";
      break;
  }
  return (
    <Badge {...props} gap="$1">
      <BadgeText
        dataSet={{
          "component-props": JSON.stringify({
            "is-text-style": true,
            "component-name": "Text",
            size: badgeIconAndTextSize,
          }),
        }}
      >
        {text}
      </BadgeText>
      <BadgeIcon
        as={GlobeIcon}
        dataSet={{
          "component-props": JSON.stringify({
            instance: true,
            "instance-name": "Icon",
            as: "GlobeIcon",
            size: badgeIconAndTextSize,
            colorMode: colorMode,
          }),
        }}
      />
    </Badge>
  );
};

BadgeBasic.description =
  "This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.";

export default BadgeBasic;
