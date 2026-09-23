pipeline {
  agent {
    label 'node'
  }

  options {
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }

    stage('Context') {
    steps {
        sh '''
            echo "=== Jenkins context ==="
            echo "Job: $JOB_NAME"
            echo "Build: $BUILD_NUMBER"
            echo "Branch: $BRANCH_NAME"
            echo "Commit: $(git rev-parse --short HEAD)"
        '''
    }
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
