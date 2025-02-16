# Early Childhood Development Platform

A modern, intuitive platform for managing early childhood development programs, tracking student progress, and organizing lessons.

![ECD Platform Screenshot](screenshot.png)

## Features

- Interactive Dashboard
- Student Progress Tracking
- Lesson Planning & Management
- Modern UI with Earth One Design System
- Real-time Updates
- Responsive Design

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Heroicons
  - Space Grotesk & Geist Typography

- **Backend:**
  - Flask
  - SQLite (Development)
  - PostgreSQL (Production)

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8+
- pip

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Development

### Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

### Code Style

- Frontend follows the Airbnb JavaScript Style Guide
- Backend follows PEP 8 guidelines

## Deployment

The application can be deployed to various platforms:

### Vercel (Frontend)
1. Fork this repository
2. Import to Vercel
3. Set environment variables
4. Deploy

### Heroku (Backend)
1. Create a new Heroku app
2. Connect to GitHub repository
3. Set environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/ecd_platform](https://github.com/yourusername/ecd_platform)
