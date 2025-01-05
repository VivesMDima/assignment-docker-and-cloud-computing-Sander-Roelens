# Documentatie
Frontend: 35.198.101.115:8080
Backend: 34.141.96.44:8081


# Dockerfiles:
## [backend](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/4486513e3f799b083a6fb8f1feef4dccea1ffc17/project/backend/dockerfile)
De backend applicatie is gemaakt met Spring. Voor een Spring applicatie kan gemakkelijk een dockerfile aangemaakt worden, omdat Spring daar zelf al [documentatie](https://spring.io/guides/gs/spring-boot-docker) voor heeft geschreven.


## [frontend](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/4486513e3f799b083a6fb8f1feef4dccea1ffc17/project/frontend/dockerfile)
De dockerfile can de frontend applicatie is gemaakt op de standaard manier. Eerst de bestanden overzetten, daarna npm install doen, dit komt omdat de node modules niet in de image zit, en tot slot de environment instellen

# Docker compose:

De docker compose file is een simpel bestand dat beide projecten tegelijk laat draaien. De [poorten](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/docker/docker-compose.yaml#L15C1-L16C18) moeten zelf nog gespecifieerd worden

# Kubernetes
Beide deployments hebben [3 pods](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/K8s/deployment-backend.yaml#L6), [de images](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/K8s/deployment-backend.yaml#L17C1-L18C1) worden gepult van dockerhub en krijgen dezelfd ports als in de dockercompose file. [De service](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/K8s/service-backend.yaml#L8) file bevat de poorten van de service 

# Helm
Helm draait net zoals k8s beide tegelijk, maar er wordt gebruik gemaakt van [templates](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/Helm/templates/deployment-backend.yaml#L1). Deze templates zijn hetzelfde als die van k8s, maar heeft de waarden in de [values.yaml](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/5f5c47312a6eaa1511035a73c0dafe3ba0ad4832/Helm/values.yaml#L1) bestanden opgeslagen, op deze manier kunnen er snel veranderingen gemaakt worden

# Google cloud

Maak bij "kubernetes engine" een cluster aan
Kopieer dan alle bestanden over
In de console worden volgende commandos getypt

    gcloud container clusters get-credentials dockercloud --zone europe-west3 --project docker-and-cloud

    kubectl apply -f ./K8s

    kubectl get svc # om de ip adressen te zien


# CI/CD

Cloud build

Triggers 
create triggers
(kan niet toevoegen enkel maar de repos van mijn eigen account)

# Cloudflare

