# Welcome to how-to-run-github-action-locally-with-act 👋

How to run GitHub Action locally with `act`.

## Sources

- [Introduction - act - User Guide](https://nektosact.com/introduction.html)
- [OrbStack · Fast, light, simple Docker & Linux on macOS](https://orbstack.dev/)

## Prerequisites

- Docker or a compatible container engine (e.g., OrbStack, Podman)
- `act` installed. You can install it via Homebrew:
  ```bash
  brew install act
  ```

## Usages

### Basic Usage

Run all GitHub Action workflows defined in your `.github/workflows/` folder:

```bash
act
```

### Running a Specific Job

Run a specific job from your workflow file:

```bash
act -j <job-name>
```

### Using a Custom Runner

Specify a custom Docker image for the runner:

```bash
act -P <platform>=<docker-image>
```

Example:

```bash
act -P ubuntu-18.04=nektos/act-environments-ubuntu:18.04
```

### Using a Different Container Engine

If you prefer to use [Podman](https://podman-desktop.io/):

```bash
export DOCKER_HOST='unix:///var/run/podman/podman.sock'
act
```

Or, with a remote Docker engine:

```bash
DOCKER_HOST='ssh://user@host' act
```

Even though if you don't know where is the Docker socket, you can use the following:

```bash
docker context ls --format json | jq
```

Then you would have similar output:
```bash
{
  "Current": false,
  "Description": "Current DOCKER_HOST based configuration",
  "DockerEndpoint": "unix:///var/run/docker.sock",
  "Error": "",
  "Name": "default"
}
{
  "Current": true,
  "Description": "OrbStack",
  "DockerEndpoint": "unix:///Users/huynhdung/.orbstack/run/docker.sock",
  "Error": "",
  "Name": "orbstack"
}
```

## Troubleshooting

If you encounter issues, please refer to the official [`act` User Guide](https://nektosact.com/introduction.html) or open an issue in this repository.

## Show your support

Give a ⭐️ if this project helped you!
