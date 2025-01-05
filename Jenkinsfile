pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    sh 'docker build -t $backend:latest -f Dockerfile.backend .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    sh 'docker build -t frontend:latest -f Dockerfile.frontend .'
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
                    docker run -d --name backend -p 8080:8080 backend:latest
                    docker run -d --name frontend -p 8081:8081 frontend:latest
                    """
                }
            }
        }
    }
}
