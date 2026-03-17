pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "saas-sub-manager"
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Lint & Test') {
            steps {
                echo 'Performing basic checks...'
                // You could add HTML/CSS linting here
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy (Local)') {
            steps {
                script {
                    // Remove old container if it exists
                    sh "docker stop saas-app || true && docker rm saas-app || true"
                    // Run the new container
                    sh "docker run -d --name saas-app -p 8080:80 ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful! Access at http://localhost:8080"
        }
    }
}