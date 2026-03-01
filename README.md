<div align="center">
    <h1>Race Board</h1>
    <em>A real-time racetrack monitoring application built with Svelte and Bun.</em>
</div>

<div align="center">
 <img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte" />
  <img src="https://img.shields.io/badge/Bun-FBF0DF?style=for-the-badge&logo=bun&logoColor=black" alt="Bun" />
  <img src="https://img.shields.io/badge/Version-0.1.0-6366f1?style=for-the-badge&logo=python&logoColor=white" alt="Version" />
</div>

## 📖 Overview

Race Board is a monitoring application designed to visualize and analyze racetrack data. It provides a
user-friendly interface to track performance metrics, visualize data trends, and gain insights into
racing activities.

<div align="center">

<table style="border-collapse: collapse; border: none;">
  <tr>
    <td><img src="assets/1.png" alt="Screenshot 1" width="350"></td>
    <td><img src="assets/2.png" alt="Screenshot 2" width="350"></td>
  </tr>
  <tr>
    <td><img src="/assets/3.png" alt="Screenshot 3" width="350"></td>
    <td><img src="assets/4.png" alt="Screenshot 4" width="350"></td>
  </tr>
</table>

</div>

## ✨ Key Features

- ⚡ **Real-time Data Visualization**: Visualize data in real-time with interactive charts and
  graphs.
- 📊 **Performance Metrics**: Track key performance indicators such speed, average speed and lane
  usage.
- 📈 **Data Analysis**: Analyze trends and patterns

## 📋 Prerequisites

- **SpeedStream**: Race Board uses [SpeedStream](https://github.com/Maxime-Cllt/SpeedStream) for data
  streaming and processing. Ensure you have it set up in your project.

## 🚀 Getting Started

### 1. Configure Environment

The application supports **three modes**:

#### 🎮 SIMULATION Mode (Default)

Perfect for UI development and testing without any API. Generates realistic mock data:

```env
APP_MODE=SIMULATION
```

**Use case**: Frontend development, UI testing, demos without backend

#### 🔧 DEV Mode

Connects to your local development API server:

```env
APP_MODE=DEV
API_URL=http://192.168.1.100:3000
```

**Use case**: Testing with real API during development

#### 🚀 PROD Mode

Connects to production API server:

```env
APP_MODE=PROD
API_URL=http://your-production-server.com:3000
```

**Use case**: Production deployment with live data

---

### 2. Install Dependencies

```bash
bun install
```

### 4. Run the Application

```bash
bun run dev
```

## 🔗 See Also

- [SpeedStream](https://github.com/Maxime-Cllt/SpeedStream)

## 🧪 Code Quality

### Unit Tests available

To run unit tests, use the following command:

```bash
bun run test
```

### Linting

To check for linting issues, run:

```bash
bun run lint
```

### Format Code

To format the codebase, use:

```bash
bun run format
```

## 🤝 Contributing

Contributions are welcome! To contribute:

- **Fork the Repository**
- **Create a Feature Branch**:
  ```bash
  git checkout -b feature/your-feature-name
  ```
