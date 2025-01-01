# Documentatie
Een deel van je oplevering is het analysedossier. Daarin documenteer je het volledig
verloop van je project. Voor een aantal van de evaluatiecriteria is het analysedossier
de enige vorm van evaluatie. Dit is bijvoorbeeld zo voor de Docker build van je
image, docker-compose en minikube. Voorzie dus duidelijke screenshots en
voldoende uitleg.
Documenteer ook duidelijke je deployment in de cloud.


# Dockerfiles:
## [backend](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/4486513e3f799b083a6fb8f1feef4dccea1ffc17/project/backend/dockerfile)
De backend applicatie is gemaakt met Spring. Voor een Spring applicatie kan gemakkelijk een dockerfile aangemaakt worden, omdat Spring daar zelf al [documentatie](https://spring.io/guides/gs/spring-boot-docker) voor heeft geschreven.


## [frontend](https://github.com/VivesMDima/assignment-docker-and-cloud-computing-Sander-Roelens/blob/4486513e3f799b083a6fb8f1feef4dccea1ffc17/project/frontend/dockerfile)
De dockerfile can de frontend applicatie is gemaakt op de standaard manier. Eerst de bestanden overzetten, daarna npm install doen, dit komt omdat de node modules niet in de image zit, en tot slot de environment instellen

# Docker compose:

De docker compose file is een simpel bestand dat beide projecten tegelijk aan zet. De poorten moeten zelf nog gespecifieerd worden

# Kubernetes
Beide deployments hebben 3 pods, de images worden gepult van dockerhub en krijgen dezelfd ports als in de dockercompose file. De service file bevat het ip adress van de service 

# Helm
Helm draait net zoals k8s beide tegelijk, maar er wordt gebruik gemaakt van templates. Deze templates zijn hetzelfde als die van k8s, maar heeft de waarden in de values.yaml bestanden opgeslagen, op deze manier kunnen er snel veranderingen gemaakt worden