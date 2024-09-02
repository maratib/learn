# Kubernetes (K8)

K8 is a `container orchestration platform` that enables developers to manage their containerized applications.

## Setup

```bash
brew install kubernetes-cli
alias k=kubectl # add alias to your ~/.zshrc
complete -o default -F __start_kubectl k
k version --client # Run this command to check the kubernetes version

# Install minikube for local deployment and testing
brew install minikube
minikube version # Run this command to check the minikube version
minikube start # Starts a local kubernetes cluster
minikube status # Gets the status a local kubernetes cluster
minikube stop # Stops a running local Kubernetes cluster
minikube dashboard # Access the Kubernetes dashboard running within the minikube
cluster
minikube -h # For further help options
```

## What is Kubernetes

- Kubernetes is an open-source `container orchestration platform` that automates the `deployment, scaling and management` of containerized applications.

- `Orchestration` means `managing the lifecycle of containers`

  - Including deployment, scaling, networking, storage and monitoring.
  - Kubernetes acts as the central control plane that automates and coordinates these tasks.
  - Ensures that the desired state of the application is maintained.

- `Containerization` means `packaging applications with dependencies, configuration files into lightweight portable unites called containers`.

- `Kubernetes` provides a framework for `managing and running these containers across a cluster of machines`.

- In AWS Kubernetes is used with `EKS (Elastic Kubernetes Services)`

## minikube

`minikube` is `local Kubernetes service` to test and deploy your applications locally.

All you need is Docker container and Kubernetes is a single command away: `minikube start`
