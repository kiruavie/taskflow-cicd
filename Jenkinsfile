pipeline {
  agent {
    label 'node'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'pnpm install --frozen-lockfile'
      }
    }
    stage('Lint') {
      steps {
        sh 'pnpm run lint'
      }
    }
    stage('Test') {
      steps {
        sh 'pnpm test'
      }
    }
    stage('Build') {
      steps {
        sh 'pnpm build'
      }
    }

  }
  post {
    success {
      echo 'Tasksflow CI completed successfully'
    }
    failure {
      echo 'Tasksflow CI failed'
    }
    always {
      echo 'Tasksflow CI finished'
    }
  }
}
