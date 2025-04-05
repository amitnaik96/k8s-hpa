## K8s Horizontal Pod Autoscaler  
This repo demonstrates how to deploy an Express app on a local Kubernetes cluster using kind with Horizontal Pod Autoscaler (HPA) to auto-scale pods based on CPU usage.

### **Architecture**
![Architecture](https://github.com/amitnaik96/k8s-hpa/blob/master/images-readme/build.png)   

## **Setup Instructions**
### **Clone the Repo**
```bash
    git clone https://github.com/amitnaik96/k8s-hpa.git
    cd kubernetes
```

### **Local Setup**
```bash
    # create kind cluster
    kind create cluster --config .\kind.yml --name k8s-hpa

    # apply the deployment
    kubectl apply -f .\deployment.yml

    # bring in metrics server
    kubectl apply -f .\components.yml

    # create load-balancer service
    kubectl apply -f .\svc.yml

    # create horizontal pod autoscaler
    kubectl apply -f .\hpa.yml
```

### **Check Cluster & Resources**
```bash
    # check whether the cluster has been created
    kind get clusters

    # commands to check deployments, pods, nodes, svc, hpa
    kubectl get deployment
    kubectl get nodes
    kubectl get pods
    kubectl get svc
```

### **Test Autoscaling**
```bash
    # keep running this command in seperate terminal
    port-forward svc/lb-service 3000:80
```
```bash
     kubectl get hpa
```
![hpa](https://github.com/amitnaik96/k8s-hpa/blob/master/images-readme/hpa.png) 

hit `http://localhost:3000/cpu` in multiple tabs to increase average cpu utilization
![tabs](https://github.com/amitnaik96/k8s-hpa/blob/master/images-readme/tabs.png) 

pods scaled up from 2 to 4
![scaledup](https://github.com/amitnaik96/k8s-hpa/blob/master/images-readme/scaledup.png) 
