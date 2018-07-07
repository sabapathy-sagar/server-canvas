//START_INSTANCE
export const startInstance = (app, server) => {
  return {
    type: "START_INSTANCE",
    app,
    server
  };
};

//KILL_INSTANCE
export const killInstance = (app, server) => {
  return {
    type: "KILL_INSTANCE",
    app,
    server
  };
};
