echo '-Building Docker Image-'
docker build -t task-2-file-read .
echo '-Running Container-'
docker run --rm --name example-container task-2-file-read
echo '-Process Complete-'