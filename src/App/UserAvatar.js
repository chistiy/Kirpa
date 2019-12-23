import React from "react";

export default function UserAvatar(props) {
  const styles = {
    img: {
      display: "block",
      width: props.width,
      height: props.height
    }
  };
  return <img src={props.src} alt="UserAvatar" style={styles.img} />;
}
