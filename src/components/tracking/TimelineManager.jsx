import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import Timeline from "./Timeline";

const TimelineManager = () => {
  const [timelineUpdates, setTimelineUpdates] = useState([]);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8181/server1"),
      onConnect: () => {
        console.log("Connected to WebSocket");

        client.subscribe("/topic/timeline-updates", (message) => {
          try {
            const update = JSON.parse(message.body);
            console.log("Received update:", update);
            setTimelineUpdates((prev) => [...prev, update]);
          } catch (error) {
            console.error("Error parsing WebSocket message:", error);
          }
        });
      },
      onDisconnect: () => console.log("Disconnected from WebSocket"),
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <div className="timeline-manager">
      <h1 className="text-center text-teal-800 text-2xl font-bold my-4">
        Donation Timeline
      </h1>
      <Timeline updates={timelineUpdates} />
    </div>
  );
};

export default TimelineManager;
