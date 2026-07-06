FROM alpine:3.24

WORKDIR /task-2-file-read

COPY . /task-2-file-read/

RUN ["head", "README.md"]

CMD ["cat", "description.txt"]