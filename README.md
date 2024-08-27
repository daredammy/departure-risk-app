
# Departure Risk Assessment Dashboard

## Overview

The Departure Risk Assessment Dashboard is a React-based web application designed to help organizations assess and manage the risks associated with departing employees. It provides a user-friendly interface to view and mitigate potential security risks related to secret access and file transfers.

## Features

- Select employees from a dropdown menu
- View overall risk level for each employee
- Display detailed risk assessments for secret access and file transfers
- Interactive mitigation buttons for each risk item
- Color-coded risk levels for easy identification
- Responsive design for various screen sizes

## Technologies Used

- React.js
- Next.js
- Material-UI (MUI)
- Emotion (for styled components)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-organization/departure-risk-assessment.git
   ```

2. Navigate to the project directory:
   ```
   cd departure-risk-assessment
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Select an employee from the dropdown menu.
2. View the overall risk level and detailed risk assessments for secret access and file transfers.
3. Click the "Mitigate" button for any risk item to view the mitigation strategy.
4. Acknowledge the mitigation strategy to mark the item as "in progress."
5. Use the "Undo" option to revert the mitigation status if needed.

## Project Structure

- `pages/`: Contains the main page component
- `components/`: (If applicable) Reusable React components
- `styles/`: Global styles and theme configuration
- `data/`: Mock data for risk assessments
- `public/`: Static assets


## Acknowledgments

- This project was created as part of a hackathon event for Afrotech 2024. Thanks to the organizers for the opportunity.