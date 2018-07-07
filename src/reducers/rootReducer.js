const defaultState = {
  servers: [
    {
      id: 1,
      appsRunning: []
    },
    {
      id: 2,
      appsRunning: []
    },
    {
      id: 3,
      appsRunning: []
    },
    {
      id: 4,
      appsRunning: []
    }
  ],
  apps: [
    {
      id: 1,
      name: "Hadoop"
    },
    {
      id: 2,
      name: "Rails"
    },
    {
      id: 3,
      name: "Chronos"
    },
    {
      id: 4,
      name: "Storm"
    },
    {
      id: 5,
      name: "Spark"
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_SERVER":
      return {
        ...state,
        servers: [...state.servers, action.server]
      };

    case "DESTROY_SERVER":
      return {
        ...state,
        servers: action.servers
      };
    case "START_INSTANCE":
      return {
        ...state,
        servers: [
          ...state.servers.map(server => {
            if (server.id === action.server.id) {
              //allow only 2 instances of app to run on the server
              if (server.appsRunning.length < 2) {
                return {
                  ...server,
                  appsRunning: [...server.appsRunning, action.app]
                };
              }
            } else {
              return server;
            }
          })
        ]
      };
    case "KILL_INSTANCE":
      return {
        ...state,
        servers: [
          ...state.servers.map(server => {
            if (server.id === action.server.id) {
              return {
                ...server,
                appsRunning: [
                  ...server.appsRunning.filter(appRunning => {
                    return appRunning.id !== action.app.id;
                  })
                ]
              };
            } else {
              return server;
            }
          })
        ]
      };
    default:
      return state;
  }
};
