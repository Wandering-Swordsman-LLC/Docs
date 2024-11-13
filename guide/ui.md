# UI Folder
Because of the nature of react, we will divide code into separate folders.

## Layout

### Components
This place stores all the UI components, such as a custom button, etc. For more information, please read [defining a component](https://react.dev/learn/your-first-component#defining-a-component)

### Context
This place stores all the `react context`. Which is a "global state" that can be passed to react components for use. In `common` folder, we have a react context dealing with scaling. For more information, take a look at [here](https://react.dev/learn/passing-data-deeply-with-context). However, we won't be using context everywhere. We will be using `charm` for our "global" state management

### Provider
This place stores all the providers, which can be wrapped around react components to pass down information. There is `<ScaleProvider></ScaleProvider>` in the common folder, which is used to pass down scaling calculations. For more information, take a look at [here](https://react.dev/reference/react/createContext#provider)

### Store
This place stores all the `atoms` for `charm`. Mainly for global state management with UI and how it interacts with the outside of react. 

### Stories
This place stores all the stories that can be viewed using [ui labs](https://pepeeltoro41.github.io/ui-labs/), provides a hot reloader which makes testing react components easier. 