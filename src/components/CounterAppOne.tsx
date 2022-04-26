import React, { useState, useEffect } from "react";
import "@trutoo/event-bus";
import "./CounterAppOne.css";
import { ChannelEvent } from "@trutoo/event-bus/dist/event-bus";

type Count = number;

const Counter = () => {
  const [count, setCount] = useState<Count>(0);

  useEffect(() => {
    function handleSubscribe(countEvent: ChannelEvent<number>) {
      setCount(countEvent.payload!);
    }
    eventBus.register("count:set", { type: "number" });
    const sub = eventBus.subscribe<number>("count:set", handleSubscribe);
    return function cleanup() {
      sub.unsubscribe();
    };
  }, []);

  function setCountGlobaly() {
    eventBus.publish("count:set", count + 1);
  }

  return (
    <div className="CounterAppOne">
      <p>Your click count : {count} </p>
      <button onClick={setCountGlobaly}>Click me</button>
    </div>
  );
};

export default Counter;
