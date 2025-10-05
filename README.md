# GrubGo - Food & Grocery Delivery App

GrubGo is a modern, feature-rich food and grocery delivery web application built with React. It provides a seamless user experience for browsing restaurants, viewing menus, and managing a shopping cart, all wrapped in a clean and responsive UI.

![GrubGo Screenshot](https://via.placeholder.com/800x400.png?text=App+Screenshot+Here)

## ✨ Features

-   **Dynamic Restaurant Discovery:** Browse a list of restaurants fetched from a live API.
-   **Powerful Search & Filter:** Easily search for specific restaurants or filter by top ratings.
-   **Detailed Menu View:** Explore restaurant menus organized by collapsible categories.
-   **State-of-the-Art Cart Management:** Add or remove items with a persistent cart powered by Redux Toolkit.
-   **Shimmer UI:** An elegant skeleton loading screen provides a better user experience while data is being fetched.
-   **Lazy Loading:** Optimized for performance with lazy loading of components to reduce initial load time.
-   **Responsive Design:** A mobile-first design that looks great on all devices, from desktops to smartphones.
-   **Online/Offline Status:** Real-time detection of the user's network connection.

## 🛠️ Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Bundler:** Parcel / Vite

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
-   [Node.js](https://nodejs.org/) (v18.x or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/my-restaurant.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd my-restaurant
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

### Running the Development Server

To start the application in development mode, run:
```sh
npm start
```
This will run the app in development mode. Open [http://localhost:1234](http://localhost:1234) (or the port specified in your terminal) to view it in your browser. The page will reload when you make changes.

## 📂 Project Structure

The project follows a standard React application structure:

```
my-restaurant/
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── utils/       # Custom hooks, Redux slices, constants
│   │   ├── About.jsx
│   │   ├── Body.jsx
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── App.jsx          # Main application component with routing
│   └── index.js         # Entry point of the application
└── ...
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.