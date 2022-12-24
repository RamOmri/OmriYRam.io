import { isHoverEnabled } from "./HoverState";
import React from "react";

type Props = {
  onHoverIn: () => void;
  onHoverOut: () => void;
  children: JSX.Element;
};

export default function Hoverable({ onHoverIn, onHoverOut, children }: Props) {
  const [isHovered, setHovered] = React.useState(false);
  const [showHover, setShowHover] = React.useState(true);

  function handleMouseEnter() {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setHovered(true);
    }
  }

  function handleMouseLeave() {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setHovered(false);
    }
  }

  function handleGrant() {
    setShowHover(false);
  }

  function handleRelease() {}

  return React.cloneElement(React.Children.only(children), {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: () => setShowHover(false),
    onResponderRelease: () => setShowHover(true),
    // if child is Touchable
    onPressIn: handleGrant,
    onPressOut: handleRelease,
  });
}

Hoverable.displayName = "Hoverable";
