pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t sanderroelens/backend:latest /home/sander_roelens/assignment-docker-and-cloud-computing-Sander-Roelens/project/backend'
                    sh 'docker build -t sanderroelens/frontend:latest /home/sander_roelens/assignment-docker-and-cloud-computing-Sander-Roelens/project/backend'
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    sh "docker tag backend:latest sanderroelens/backend:latest"
                    sh "docker tag frontend:latest sanderroelens/frontend:latest"
                    sh "docker push sanderroelens/backend:latest"
                    sh "docker push sanderroelens/frontend:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh """
                    kubectl apply -f  /home/sander_roelens/assignment-docker-and-cloud-computing-Sander-Roelens/K8s/
                    kubectl rollout restart deployment frontend
                    kubectl rollout restart deployment backend
                    """
                }
            }
        }
    }
}
