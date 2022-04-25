import React from "react";
import Gallery from "react-photo-gallery";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export default function ExpolorContainer() {
  const items = [
    {
      // Image item:
      itemId: "sample-id",
      mediaUrl:
        "https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "differentItem",
      mediaUrl:
        "https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // HTML item:
      itemId: "htmlItem",
      html: "<div style='width: 300px; height: 200px; background:pink;'>I am a text block</div>",
      metadata: {
        type: "text",
        height: 200,
        width: 300,
        title: "sample-title",
        description: "sample-description",
        backgroundColor: "pink",
      },
    },
  ];
  return <div className=" mt-[8rem]"></div>;
}
