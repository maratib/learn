# Docker

## Containers

Containers `Provides is an isolated environment` for executing `our application`.

## Images

An Image includes everything an Application needs to run, it contains :-  
`A cut-down OS`, `Third-party libraries`, `Application Files` and `Environment variables` etc.

## Create Docker Images

```bash
# Docker image Build -t for tag . for Dockerfile which is on root in this case
docker build -t hello-world .

#List docker images
docker images # or
docker image ls


# Run docker image
docker run hello-world

# Remove docker image
docker rmi -f hello-world

```

## Dockerfile

most used commands

<table>
<tr><th>Command</th><th>Description</th><th>Example</th></tr>
<tr><td>FROM</td><td>from image</td><td>node:alpine</td></tr>
<tr><td>WORKDIR</td><td>work director</td><td>/app</td></tr>
<tr><td>COPY</td><td>move files</td><td>COPY . /app</td></tr>
<tr><td>ADD</td><td>move files</td><td>ADD . /app</td></tr>
<tr><td>ENV</td><td>-</td><td>-</td></tr>
<tr><td>EXPOSE</td><td>-</td><td>-</td></tr>
<tr><td>USER</td><td>-</td><td>-</td></tr>
<tr><td>CMD</td><td>-</td><td>-</td></tr>
<tr><td>ENTRYPOINT</td><td>-</td><td>-</td></tr>

</table>
