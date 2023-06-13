apiVersion: apps/v1
kind: Deployment
metadata:
  name: moj-prototype
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prototype
  template:
    metadata:
      labels:
        app: prototype
    spec:
      containers:
      - name: prototype
        image: ${REGISTRY}/${REPOSITORY}:${IMAGE_TAG}
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: prototype-service
  labels:
    app: prototype-service
spec:
  ports:
  - port: 3000
    name: http
    targetPort: 3000
  selector:
    app: prototype
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: prototype-ingress
  annotations:
    external-dns.alpha.kubernetes.io/set-identifier: prototype-ingress-${KUBE_NAMESPACE}-green
    external-dns.alpha.kubernetes.io/aws-weight: "100"
spec:
  ingressClassName: default
  tls:
  - hosts:
    - ${KUBE_NAMESPACE}.apps.live.cloud-platform.service.justice.gov.uk
  rules:
  - host: ${KUBE_NAMESPACE}.apps.live.cloud-platform.service.justice.gov.uk
    http:
      paths:
      - path: /
        pathType: ImplementationSpecific
        backend:
          service:
            name: prototype-service
            port:
              number: 3000
