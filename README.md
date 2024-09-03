# Wealth Stream

Welcome to the Wealth Stream app! This project was created as a learning exercise to explore the Plaid API and gain more exposure to the NextJS framework, TailwindCSS, and TypeScript. The app allows users to connect their bank accounts using Plaid and manage their financial data efficiently.

## Features

- **Bank Account Integration**: Securely connect and retrieve financial data from your bank accounts using the Plaid API.
- **User Authentication**: Secure login and authentication handled via AppWrite.
- **Responsive Design**: TailwindCSS ensures that the app looks great on all devices.
- **Server-Side Rendering**: NextJS powers efficient server-side rendering for improved performance and SEO.

## Technologies Used

- **ReactJS**: For building dynamic and interactive user interfaces.
- **NextJS**: Utilized for its server-side rendering, API routes, and file-based routing capabilities.
- **TailwindCSS**: A utility-first CSS framework for creating modern, responsive designs.
- **TypeScript**: Adds type safety and improved developer tooling to JavaScript.
- **AppWrite**: Provides backend services like authentication and data storage.

## Running the App Locally

To run the app locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14.x or later)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ravishetty9/wealth-stream.git
   cd wealth-stream
   ```
2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**
   
   Create a .env.local file in the root of your project and add your environment variables:

   ```env
   NEXT_PUBLIC_PLAID_CLIENT_ID=your-plaid-client-id
   NEXT_PUBLIC_PLAID_SECRET=your-plaid-secret
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   ```
   
5. **Run the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```
   The app will be running at http://localhost:3000.
   
7. **Build and Run in Production Mode**

   To build and run the app in production mode:

    Using npm:

   ```bash
   npm run build
   npm start
   ```

   Or using yarn:
   ```bash
   yarn build
   yarn start
   ```
