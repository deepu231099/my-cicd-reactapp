pipeline {
  agent any

  environment {
    IMAGE_NAME = 'jenkins-cicd-reactapp'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/deepu231099/my-cicd-reactapp.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          script {
            // Get Git short SHA
            COMMIT_HASH = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
            IMAGE_TAG = "${DOCKER_USER}/${IMAGE_NAME}:${COMMIT_HASH}"
            env.IMAGE_TAG = IMAGE_TAG

            echo "🔨 Building image: $IMAGE_TAG"
            sh "docker build -t $IMAGE_TAG ."
          }
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "🔐 Logging in to Docker Hub..."
            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
            echo "📤 Pushing image: $IMAGE_TAG"
            docker push $IMAGE_TAG
          '''
        }
      }
    }
  }
}
