# K8s Horizontal Pod Autoscaler

## **Setup Instructions**
### **Clone the repo**
```bash
    git clone https://github.com/amitnaik96/k8s-hpa.git
    cd kubernetes
```

### **Local**
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

hit `http://localhost:3000/cpu` in multiple tabs to increase average cpu utilization


pods scaled up from 2 to 4
