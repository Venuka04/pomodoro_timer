# Focus Burst - Pomodoro Timer app

A simple and visually appealing Pomodoro Timer built using React, with a countdown animation and customizable work/break intervals.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies Used](#technologies-used)

## Features

- **Work/Break Intervals:** Allows you to choose between work sessions and short/long breaks.
- **Countdown Animation:** A visually engaging countdown circle that displays the time left.
- **Responsive Design:** Adapts well to different screen sizes.
- **Customizable Timer:** Adjust the duration of work and break intervals.

## Screenshots

![Pomodoro Timer Screenshot](./screenshots/pomodoro_timer.png)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- vite (v4 or higher)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Venuka04/pomodoro_timer.git
   cd pomodoro-timer
   ```

2. **Install Dependencies Using npm:**

   ```bash
   npm install
   ```

or using yarn:

    ```bash
    yarn install
    ```

3. **Start the Development Server:**

   ```bash
   npm run dev

   ```

   or using yarn:

   ```bash
   yarn dev
   ```

Open your browser and navigate to http://localhost:5173.

## Usage

- **Select Interval:** Choose between "Work", "Short Break", or "Long Break" by clicking the respective buttons.
- **Start/Pause:** Use the "Start" and "Pause" buttons to control the timer.
- **Timer Display:** The remaining time is shown in the center of the circle. The circle's color changes as time progresses.

## Customization

### Changing Timer Colors

You can customize the colors of the countdown circle by modifying the CountdownAnimation component in CountdownAnimation.jsx.

    ``` jsx
    colors={["#010018", "#006005", "#ffc400", "#ff6a00", "#ff0000"]} //customize colors
    ```

### Changing Timer Duration

The durations for work, short break, and long break can be customized in the settings of your application.

    ```jsx
    colorsTime={[timer * 60, timer * 45, timer * 30, timer * 15, timer * 0]} //customize time duration of colors
    ```

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling for fast development.
- **React Countdown Circle Timer**: A customizable countdown timer component.
