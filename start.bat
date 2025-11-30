@echo off
echo ========================================
echo Starting ElectroMart Application
echo ========================================
echo.

echo Starting Backend Server...
start "ElectroMart Backend" cmd /k "cd electromart-backend && npm run dev"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Application...
start "ElectroMart Frontend" cmd /k "cd electromart-frontend && npm start"

echo.
echo ========================================
echo Application Started!
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Both applications are starting in separate windows.
echo Close this window when done.
echo.
pause
