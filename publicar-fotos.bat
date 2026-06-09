@echo off
chcp 65001 >nul
title Publicar Fotos — Delivery Mantovani

echo.
echo  ================================
echo   Publicando fotos no site...
echo  ================================
echo.

cd /d "%~dp0"

git add Delivery/images/

git diff --cached --quiet
if %errorlevel%==0 (
  echo  Nenhuma foto nova encontrada.
  echo  Adicione fotos na pasta images\produtos\ e tente novamente.
  echo.
  pause
  exit /b
)

for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set dt=%%I
set msg=Fotos atualizadas em %dt:~6,2%/%dt:~4,2%/%dt:~0,4% %dt:~8,2%:%dt:~10,2%

git commit -m "%msg%"

echo.
echo  Enviando para o GitHub...
git push

echo.
echo  ================================
echo   Pronto! Site atualizado.
echo   As fotos aparecem em ~30 seg.
echo  ================================
echo.
pause
