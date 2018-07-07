// ADD_SERVER
export const addServer = () => {
  return {
    type: "ADD_SERVER",
    server: {
      id: Date.now(),
      appsRunning: []
    }
  };
};

//DESTROY_SERVER
export const destroyServer = servers => {
  return {
    type: "DESTROY_SERVER",
    servers
  };
};
