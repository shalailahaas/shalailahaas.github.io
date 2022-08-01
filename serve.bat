FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
docker run --rm -v "%cd%:/srv/jekyll" -p "8080:8080" -it amirpourmand/al-folio bundler  exec jekyll serve --watch --port=8080 --host=0.0.0.0 
PAUSE
