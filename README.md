# Weather Now

Weather Now is a modern web application for checking current weather conditions. The app provides an intuitive and responsive interface with real-time weather data using various APIs. It's built using React, Vite, and TypeScript with Tailwind CSS for styling.

## Features

-   Fetch current weather data using **Open-Meteo API**.
-   Displays key weather information such as temperature, humidity, wind speed, and precipitation.
-   Responsive UI with smooth animations using **Tailwind CSS** and **Lucide Icons**.
-   Fully interactive and dynamic weather charts using **Recharts**.
-   Supports both **light** and **dark** themes with **Next Themes**.

## Tech Stack

-   **React**: For building the user interface.
-   **Vite**: Fast build tool and development server.
-   **TypeScript**: For type safety and better developer experience.
-   **Tailwind CSS**: Utility-first CSS framework for fast UI development.
-   **Recharts**: For visualizing weather data in interactive charts.
-   **Axios**: For API calls.
-   **Shadcn UI**: For accessible/styled UI components.
-   **Sonner**: For notifications.

## Installation

To get started with **Weather Now**, clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/weather-now.git
cd weather-now
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

This will start the development server and you can view the app in your browser at `http://localhost:3000`.

## Build

To create a production build:

```bash
npm run build
```

This will compile the TypeScript code, bundle the assets, and optimize the app for production.

## Preview

To preview the production build locally:

```bash
npm run preview
```

This will serve the built version of the app for previewing before deploying.

## Linting and Formatting

-   **Linting**: The project uses ESLint for code quality. To run the linter:

    ```bash
    npm run lint
    ```

-   **Prettier**: Code formatting is handled by Prettier. It will automatically format the code before committing if you have a pre-commit hook set up.

## Contributing

Feel free to fork this repository and submit pull requests. Please make sure to run the linter and ensure that the code is properly formatted before submitting your changes.

## License

This project is licensed under the MIT License.

---

## `package.json` Overview

### Scripts

-   `dev`: Runs the development server using Vite.
-   `build`: Builds the project with TypeScript and Vite.
-   `lint`: Runs ESLint to check for code quality issues.
-   `preview`: Serves the production build for previewing.

### Dependencies

-   `@radix-ui/react-scroll-area`, `@radix-ui/react-slot`: For building accessible UI components.
-   `@tanstack/react-query`: For handling API requests and caching.
-   `axios`: For making HTTP requests.
-   `class-variance-authority`: For class name variants management.
-   `lucide-react`: For using icons in the UI.
-   `next-themes`: For supporting light/dark themes.
-   `recharts`: For rendering charts.
-   `sonner`: For notification handling.
-   `tailwind-merge`: For merging Tailwind CSS class names.

### Development Dependencies

-   `@vitejs/plugin-react-swc`: Vite plugin for React with SWC.
-   `autoprefixer`: For auto-prefixing CSS for cross-browser compatibility.
-   `eslint`, `prettier`: For code linting and formatting.
-   `tailwindcss`: For utility-first CSS framework.
-   `typescript`: For TypeScript support.

---

This `README.md` gives a good overview of the project, the tech stack, and how to get started with it. You can further customize it to fit any specific details or additional setup steps.
