Sometimes an effect creates something that needs to be stopped.
Examples:
setInterval
event listener
subscription
websocket connection

# For example:
  useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}, []);
# The function:
  return () => {
    clearInterval(timer);
  };
  Think:
  Effect starts
    ↓
  Timer running
      ↓
  Component removed
      ↓
  Cleanup
      ↓
  Timer stopped
  Without cleanup, you can create memory leaks or unwanted background work.
  
