@echo off
echo ========================================
echo ElectroMart React + Node.js Setup
echo ========================================
echo.

echo Setting up Backend...
cd electromart-backend
echo Installing backend dependencies...
call npm install
echo.
echo Backend setup complete!
echo.

echo Setting up Frontend...
cd ..\electromart-frontend
echo Installing frontend dependencies...
call npm install
echo.
echo Frontend setup complete!
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo 1. Start MongoDB (if using local database)
echo 2. Start Backend: cd electromart-backend && npm run dev
echo 3. Start Frontend: cd electromart-frontend && npm start
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
pause
