# Rick and Morty Character Explorer

This is a React application that fetches character data from the [Rick and Morty API](https://rickandmortyapi.com/documentation/) and displays it in a responsive, paginated table using Material-UI. Users can also view detailed information about each character in a modal dialog.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Fetches character data from the Rick and Morty API
- Displays characters in a responsive, paginated table
- Allows sorting the table by character ID, name, status, and species
- Provides a modal dialog to view detailed information about each character
- Responsive design for different screen sizes
- TypeScript for type safety

## Dependencies

This project uses the following dependencies:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Material-UI](https://mui.com/material-ui/)
- [Axios (for API requests)](https://axios-http.com/docs/intro)
- [TanStack Query](https://tanstack.com/)

## Installation

1. Clone the repository:

```bash
https://github.com/artuone83/rick-and-morty
```

2. Navigate to the project directory:

```bash
cd rick-and-morty
```

3. Install the dependencies:

```bash
npm install
```

This will start the application at `http://localhost:3000`.

## Usage

To start the development server, run:

```bash
npm start
```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Objective:

Develop an application that fetches character data from the Rick and Morty API, displays it in a responsive, paginated table using Material-UI, and allows users to view all character details in a modal dialog.

## Requirements

### Setup and Project Structure:

Initialize a new React project with TypeScript and install necessary packages (create-react-app with TypeScript template, Material-UI, axios for API requests).
Organize the project into components and utilities.

### API Integration:

Fetch character data from the Rick and Morty API (https://rickandmortyapi.com/api/character).

### Components:

- App Component: Serves as the container for all other components.
- Character Table Component: Uses Material-UI's Table components to display characters. Include features for pagination, sorting, and editing.
  - Columns needed:
    - Image (circle avatar)
    - Id
    - Name
    - Status
    - Species
- Character Details Dialog: A modal dialog that opens when the "Details" button in a table row is clicked, allowing users to view all of the character details.

### Functionality:

- Pagination: : Implement pagination to control the amount of data displayed at once, using Material-UI Pagination.
- Sorting: Allow the user to sort the table by character ID, name, status, and species.
- View Details: Each row should have a button that, when clicked, opens a modal dialog showing detailed information about the character in a nicely formatted way.

### State Management:

- Use React's Context API or useState and useEffect hooks to manage and persist state.
- Optionally, use Redux for state management to show advanced skills

### Types:

- Define TypeScript interfaces or types for the character data and any props passed to components.

### Styling:

- Use Material-UI for all UI elements to ensure a cohesive look and feel.
- Ensure the application is responsive and maintains layout integrity on different screen sizes.
- Ensure the application is visually appealing and user-friendly.

### Bonus (Optional)

- Add filters (e.g., by status or species) to the table.
- Enhance the modal dialog with animations or additional interactive elements.
- Use Material-UI themes to customize the color scheme.
- Use TanStack Query for data fetching

### Deliverables:

- A GitHub/Gitlab repository (or compressed file of a repository) containing the source code.
- A ‘README.md’ file with instructions on how to set up and run the project, including any necessary installation steps

### Evaluation criteria:

- Correct implementation of features as per requirements.
- Code quality, readability, and use of TypeScript for type safety.
- Efficient use of Material-UI components and customization.
- Implementation of the table's pagination and sorting features.
- Creativity in UI/UX design and problem-solving approach.

Happy coding!
