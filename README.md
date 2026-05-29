# Chess Parser Frontend ♟️

A modern React application for digitizing chess scoresheets. This frontend allows users to upload images of chess scoresheets, extracts the moves using a backend API, and visualizes the game on an interactive chessboard.

## ✨ Features

-   **Scoresheet Digitization**: Upload images of handwritten or printed chess scoresheets.
-   **Interactive Chessboard**: Visualize the game state move-by-move using `react-chessboard`.
-   **Move Validation**: Automatically detects and highlights illegal or invalid moves.
-   **Move Editing**: Correct any OCR errors directly in the move list.
-   **Game Navigation**: Step through the game with Next, Previous, and Reset controls.
-   **Debug Insights**: View raw OCR text and intermediate parsed text for debugging.
-   **Modern UI**: Built with Tailwind CSS for a sleek, dark-themed aesthetic with animations.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Chess Logic**: [chess.js](https://github.com/jhlywa/chess.js)
-   **Board Visualization**: [react-chessboard](https://github.com/Clariity/react-chessboard)
-   **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd chess_parser/frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

> **Note:** Ensure the backend server is running on `http://localhost:8001` for the image extraction features to work.

## 📂 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Chessboard, Cursor, etc.)
│   ├── pages/           # Main page views (Landing, Parser, Test)
│   ├── App.jsx          # Main application component & Routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 📄 License

[MIT](LICENSE)